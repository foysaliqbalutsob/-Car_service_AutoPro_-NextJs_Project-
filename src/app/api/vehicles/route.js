import clientPromise from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

import { ObjectId } from "mongodb"; 

// ১. GET মেথড: ডাটাবেস থেকে সব গাড়ি নিয়ে আসা
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    // সব গাড়ি ফেচ করা এবং লেটেস্ট গুলো আগে দেখানো (sort by _id)
    const vehicles = await db.collection("vehicles").find({}).sort({ createdAt: -1 }).toArray();

    return NextResponse.json(vehicles, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// ২. POST মেথড: আপনার দেওয়া ডাটা ফরম্যাট অনুযায়ী সেভ করা
export async function POST(request) {
  try {
    const body = await request.json();
    
    // আপনার ডাটা অবজেক্ট থেকে ফিল্ডগুলো বের করে আনা
    const { 
      id, // কাস্টম আইডি (যেমন: v5)
      model, 
      year, 
      license, 
      status, 
      image, 
      milage, 
      nextService, 
      driver 
    } = body;

    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    // ডাটাবেসে ইনসার্ট করার জন্য অবজেক্ট
    const newVehicle = {
      id,           // কাস্টম আইডি
      model,
      year: Number(year), // সংখ্যা হিসেবে সেভ করা ভালো
      license,
      status,
      image,
      milage,
      nextService,
      driver,
      createdAt: new Date(),
    };

    const result = await db.collection("vehicles").insertOne(newVehicle);

    return NextResponse.json(
      { 
        message: "Vehicle added successfully", 
        insertedId: result.insertedId 
      }, 
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add vehicle", details: error.message },
      { status: 500 }
    );
  }
}

// ObjectId ইমপোর্ট করতে হবে

// ৩. DELETE মেথড: ডাটাবেস থেকে গাড়ি মুছে ফেলা
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id"); // URL থেকে আইডি নেওয়া

    if (!id) {
      return NextResponse.json({ error: "Vehicle ID is required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    // MongoDB থেকে ডিলিট করা
    const result = await db.collection("vehicles").deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Vehicle not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Vehicle deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}