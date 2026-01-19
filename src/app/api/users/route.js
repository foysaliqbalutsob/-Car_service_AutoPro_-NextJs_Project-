import clientPromise from "@/app/lib/dbConnect";
import bcrypt from "bcryptjs";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    if (email) {
      // Fetch single user by email
      const user = await db.collection("users").findOne({ email });
      if (!user) {
        return new Response(JSON.stringify({ error: "User not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Remove password from response
      const { password, ...userWithoutPassword } = user;
      userWithoutPassword._id = userWithoutPassword._id.toString();

      return new Response(JSON.stringify(userWithoutPassword), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      // Fetch all users (admin functionality)
      const users = await db.collection("users").find({}).toArray();

      // MongoDB ObjectId to string and remove passwords
      const usersFormatted = users.map((u) => {
        const { password, ...userWithoutPassword } = u;
        return {
          ...userWithoutPassword,
          _id: userWithoutPassword._id.toString(),
        };
      });

      return new Response(JSON.stringify(usersFormatted), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request) {
  try {
    const { firstName, lastName, email, phone, password, vehicleType } =
      await request.json();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !password ||
      !vehicleType
    ) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user with all data
    const result = await db.collection("users").insertOne({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      vehicleType,
      role: "user",
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({
        message: "User created successfully",
        userId: result.insertedId.toString(),
      }),
      { status: 201, headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
