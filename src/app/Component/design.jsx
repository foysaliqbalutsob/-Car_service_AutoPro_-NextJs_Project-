<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>AutoPro Services | Premium Car Care</title>
<!-- Google Fonts & Icons -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Theme Configuration -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#0d65f2",
                        "background-light": "#f5f7f8",
                        "background-dark": "#101722",
                        "slate-custom": "#49699c",
                        "dark-custom": "#0d131c"
                    },
                    fontFamily: {
                        "display": ["Space Grotesk", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-dark-custom dark:text-white transition-colors duration-300">
<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 w-full border-b border-solid border-[#e7ecf4] dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 md:px-20 lg:px-40 py-3">
<div class="max-w-[1200px] mx-auto flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="text-primary">
<svg class="w-8 h-8" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h1 class="text-xl font-bold tracking-tight">AutoPro Services</h1>
</div>
<nav class="hidden md:flex items-center gap-8">
<a class="text-sm font-medium hover:text-primary transition-colors" href="#services">Services</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#why-us">Why Us</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#packages">Packages</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#mechanics">Mechanics</a>
<button class="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/20">
                    Book Now
                </button>
</nav>
</div>
</header>
<!-- Hero Section -->
<section class="px-4 md:px-20 lg:px-40 py-10">
<div class="max-w-[1200px] mx-auto">
<div class="relative rounded-xl overflow-hidden min-h-[520px] flex flex-col justify-center px-8 md:px-16" data-alt="Modern high-end luxury car in a clean service garage" style='background-image: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvquiY3V-9jF_ftIaDPbLU_imftlyVtPArMG93ZiDRpuzoujI0_GdQB_uwGphTG0EMnOozKeMmZXNQvn4oIIo_pcc9-8QNC8ye7U7PD0YG0hx0ZfSOhNutHBXoacwW9t-nCjtvbBi6cfXpxKqGq0U3LZOOwaLuYR85vX9llRgRHo2RXrbtyZSC1Q24iZuVQreh2eyJR6jE_4lPMCux7vBxUsW5OI1OoFjycbnL3nb6SNbuVu_rfW7B8wHhPNNL8gA4no5MlZwGqts"); background-size: cover; background-position: center;'>
<div class="max-w-2xl space-y-6">
<h2 class="text-4xl md:text-6xl font-bold text-white leading-[1.1]">
                        Premium Care for <span class="text-primary">Every</span> Vehicle
                    </h2>
<p class="text-lg text-white/80 font-normal max-w-lg">
                        From precision detailing to expert mechanical repairs, we keep your car performing at its peak with factory-grade standards.
                    </p>
<div class="flex gap-4">
<button class="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold text-base transition-all">
                            Schedule Service
                        </button>
<button class="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-base transition-all">
                            View Pricing
                        </button>
</div>
</div>
</div>
</div>
</section>
<!-- Our Services -->
<section class="px-4 md:px-20 lg:px-40 py-16 bg-white dark:bg-slate-900/50" id="services">
<div class="max-w-[1200px] mx-auto">
<div class="mb-12">
<h2 class="text-3xl font-bold">Our Professional Services</h2>
<div class="h-1.5 w-20 bg-primary mt-4 rounded-full"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Card 1 -->
<div class="group p-8 bg-background-light dark:bg-background-dark rounded-xl border border-[#ced8e8] dark:border-slate-800 hover:border-primary transition-all hover:shadow-xl">
<div class="mb-6 inline-flex items-center justify-center size-14 bg-primary/10 rounded-lg text-primary">
<span class="material-symbols-outlined text-4xl">local_car_wash</span>
</div>
<h3 class="text-xl font-bold mb-3">Precision Car Wash</h3>
<p class="text-slate-custom dark:text-slate-400 leading-relaxed mb-6">High-end detailing using pH-neutral chemicals for a long-lasting showroom finish.</p>
<a class="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all" href="#">
                        Learn More <span class="material-symbols-outlined">arrow_forward</span>
</a>
</div>
<!-- Card 2 -->
<div class="group p-8 bg-background-light dark:bg-background-dark rounded-xl border border-[#ced8e8] dark:border-slate-800 hover:border-primary transition-all hover:shadow-xl">
<div class="mb-6 inline-flex items-center justify-center size-14 bg-primary/10 rounded-lg text-primary">
<span class="material-symbols-outlined text-4xl">build</span>
</div>
<h3 class="text-xl font-bold mb-3">Expert Mechanical Repair</h3>
<p class="text-slate-custom dark:text-slate-400 leading-relaxed mb-6">Advanced computer diagnostics and certified professional repairs for all makes and models.</p>
<a class="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all" href="#">
                        Learn More <span class="material-symbols-outlined">arrow_forward</span>
</a>
</div>
<!-- Card 3 -->
<div class="group p-8 bg-background-light dark:bg-background-dark rounded-xl border border-[#ced8e8] dark:border-slate-800 hover:border-primary transition-all hover:shadow-xl">
<div class="mb-6 inline-flex items-center justify-center size-14 bg-primary/10 rounded-lg text-primary">
<span class="material-symbols-outlined text-4xl">settings_suggest</span>
</div>
<h3 class="text-xl font-bold mb-3">Premium Car Parts</h3>
<p class="text-slate-custom dark:text-slate-400 leading-relaxed mb-6">Genuine OEM parts and accessories with full warranty coverage for your peace of mind.</p>
<a class="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all" href="#">
                        Learn More <span class="material-symbols-outlined">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
<!-- Why Choose Us -->
<section class="px-4 md:px-20 lg:px-40 py-20" id="why-us">
<div class="max-w-[1200px] mx-auto text-center mb-16">
<h2 class="text-3xl font-bold mb-4">Why Choose AutoPro?</h2>
<p class="text-slate-custom dark:text-slate-400">Engineering excellence meets customer satisfaction.</p>
</div>
<div class="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
<div class="flex flex-col items-center text-center p-6 space-y-4">
<div class="text-primary"><span class="material-symbols-outlined text-5xl">verified_user</span></div>
<h4 class="font-bold text-lg">Certified Mechanics</h4>
<p class="text-sm text-slate-custom dark:text-slate-400">Every team member is ASE certified with specialized brand training.</p>
</div>
<div class="flex flex-col items-center text-center p-6 space-y-4">
<div class="text-primary"><span class="material-symbols-outlined text-5xl">payments</span></div>
<h4 class="font-bold text-lg">Fair Pricing</h4>
<p class="text-sm text-slate-custom dark:text-slate-400">Transparent quotes with no hidden fees or unnecessary upsells.</p>
</div>
<div class="flex flex-col items-center text-center p-6 space-y-4">
<div class="text-primary"><span class="material-symbols-outlined text-5xl">speed</span></div>
<h4 class="font-bold text-lg">Fast Service</h4>
<p class="text-sm text-slate-custom dark:text-slate-400">Optimized workflows to get you back on the road safely and quickly.</p>
</div>
<div class="flex flex-col items-center text-center p-6 space-y-4">
<div class="text-primary"><span class="material-symbols-outlined text-5xl">history</span></div>
<h4 class="font-bold text-lg">20+ Years Experience</h4>
<p class="text-sm text-slate-custom dark:text-slate-400">A legacy of excellence in automotive maintenance and repair since 2004.</p>
</div>
</div>
</section>
<!-- Popular Packages -->
<section class="px-4 md:px-20 lg:px-40 py-20 bg-[#f0f4f8] dark:bg-slate-900" id="packages">
<div class="max-w-[1200px] mx-auto">
<div class="text-center mb-16">
<h2 class="text-3xl font-bold mb-4">Popular Maintenance Packages</h2>
<p class="text-slate-custom dark:text-slate-400">Designed to keep your vehicle in prime condition year-round.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
<!-- Basic -->
<div class="bg-white dark:bg-background-dark rounded-xl border border-slate-200 dark:border-slate-800 p-8">
<h4 class="text-lg font-bold mb-2">Basic Maintenance</h4>
<div class="flex items-baseline gap-1 mb-6">
<span class="text-4xl font-bold">$49</span>
<span class="text-slate-custom">/visit</span>
</div>
<ul class="space-y-4 mb-8">
<li class="flex items-center gap-3 text-sm"><span class="material-symbols-outlined text-green-500 text-lg">check_circle</span> Oil &amp; Filter Change</li>
<li class="flex items-center gap-3 text-sm"><span class="material-symbols-outlined text-green-500 text-lg">check_circle</span> 21-Point Inspection</li>
<li class="flex items-center gap-3 text-sm"><span class="material-symbols-outlined text-green-500 text-lg">check_circle</span> Tire Pressure Check</li>
<li class="flex items-center gap-3 text-sm text-slate-400"><span class="material-symbols-outlined text-slate-300 text-lg">cancel</span> Engine Diagnostics</li>
</ul>
<button class="w-full py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-colors">Select Package</button>
</div>
<!-- Popular -->
<div class="bg-primary rounded-xl p-8 relative scale-105 shadow-2xl shadow-primary/30">
<div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md">Most Popular</div>
<h4 class="text-lg font-bold mb-2 text-white">Full Detailing</h4>
<div class="flex items-baseline gap-1 mb-6 text-white">
<span class="text-5xl font-bold">$129</span>
<span class="text-white/70">/visit</span>
</div>
<ul class="space-y-4 mb-8 text-white">
<li class="flex items-center gap-3 text-sm font-medium"><span class="material-symbols-outlined text-white text-lg">check_circle</span> Interior Deep Clean</li>
<li class="flex items-center gap-3 text-sm font-medium"><span class="material-symbols-outlined text-white text-lg">check_circle</span> Exterior Wax &amp; Polish</li>
<li class="flex items-center gap-3 text-sm font-medium"><span class="material-symbols-outlined text-white text-lg">check_circle</span> Wheel &amp; Rim Shine</li>
<li class="flex items-center gap-3 text-sm font-medium"><span class="material-symbols-outlined text-white text-lg">check_circle</span> Ceramic Coating Base</li>
</ul>
<button class="w-full py-3 bg-white text-primary font-bold rounded-lg hover:bg-slate-100 transition-colors">Book Now</button>
</div>
<!-- Premium -->
<div class="bg-white dark:bg-background-dark rounded-xl border border-slate-200 dark:border-slate-800 p-8">
<h4 class="text-lg font-bold mb-2">Engine Overhaul</h4>
<div class="flex items-baseline gap-1 mb-6">
<span class="text-4xl font-bold">$299</span>
<span class="text-slate-custom">/start</span>
</div>
<ul class="space-y-4 mb-8">
<li class="flex items-center gap-3 text-sm"><span class="material-symbols-outlined text-green-500 text-lg">check_circle</span> Full Diagnostics</li>
<li class="flex items-center gap-3 text-sm"><span class="material-symbols-outlined text-green-500 text-lg">check_circle</span> Part Reconditioning</li>
<li class="flex items-center gap-3 text-sm"><span class="material-symbols-outlined text-green-500 text-lg">check_circle</span> Performance Tuning</li>
<li class="flex items-center gap-3 text-sm"><span class="material-symbols-outlined text-green-500 text-lg">check_circle</span> 12-Month Warranty</li>
</ul>
<button class="w-full py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-colors">Select Package</button>
</div>
</div>
</div>
</section>
<!-- Our Expert Mechanics -->
<section class="px-4 md:px-20 lg:px-40 py-20" id="mechanics">
<div class="max-w-[1200px] mx-auto">
<div class="flex justify-between items-end mb-12">
<div>
<h2 class="text-3xl font-bold mb-2">Our Expert Team</h2>
<p class="text-slate-custom dark:text-slate-400">The skilled hands behind every perfect service.</p>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-4 gap-6">
<div class="group">
<div class="aspect-square bg-slate-200 rounded-lg overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary transition-all">
<img alt="Professional mechanic smiling" class="w-full h-full object-cover" data-alt="Professional mechanic in clean uniform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQZaPsMF-D5SDejLCW9x5zPtsPwJCB018fOWAdJK9C7Q8DR3c55u_uwb3j7bvA9CTnEQX2yreAGRNQj9hiNJXkRBAMmnphijDH0ofLRYDk3lDzK2CuEtKh62t8h0xVT9j-Qpe4k1FyLfrgITjvJeG0NxCeX-aC2V8RhMAwYnqjM3Mk6r5czDApSikHr6a4A5R6phJnos2i4iyF3D58vMzSWy1B7PbY7GbBSDEIVz6jSnmf-hdieHqRI3rt1cP7JHsVLwKxtD7L_fU"/>
</div>
<h5 class="text-lg font-bold">Marcus Chen</h5>
<p class="text-sm text-primary font-medium">Lead Engine Specialist</p>
</div>
<div class="group">
<div class="aspect-square bg-slate-200 rounded-lg overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary transition-all">
<img alt="Detailing specialist working" class="w-full h-full object-cover" data-alt="Detailing specialist in clean workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_8pm4ZTFYZoKBymdjs3lxDb7C5BGFNqHM60ShvIw3ZM0wrnL2a4iiyq4rR-2Fq2k9KkUVJbvNJ4yfwPCEMTFaiYSvpPyi-gSTIBFgMI8f1hkun3p6voWRFyc5yCfHteURRURQnC_zSycWv9wDx3aGn5zciHyuGG3DMCP8rxyEpweTLVTBiT0E0lP5YjDAKdZ4OKZI-Vm2s330MvUMDiJ7zOdiXyceR4eoVb2JTILaqII4iQEDKu2ANW6CMxfOR8Ds8keV6sRdAKE"/>
</div>
<h5 class="text-lg font-bold">Sarah Williams</h5>
<p class="text-sm text-primary font-medium">Aesthetic Detailing Pro</p>
</div>
<div class="group">
<div class="aspect-square bg-slate-200 rounded-lg overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary transition-all">
<img alt="Electrical technician with tablet" class="w-full h-full object-cover" data-alt="Diagnostic technician using tablet" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCreN2ZG5NAx8xc9SQ-QfYPAKWAyMK9q-3DpKBQzbMK2wx_rcMaREwYhwmU-kSAquXGnaQgUU7CDHKxavjABgvt1UcljcIaatA1iEKEax1DGj2ok4hlUBec2QcbFCjvaWIzNVDQv-8Sc8iPuAihrZaGyLaQqCfjMrDK6SMfBZVKyX286F6YZEjR41kbrWQBJbgQRhLeUUHBEK8Qi4liNtlN5t2ZFjXCvaY8885Tgh372vssE7AbQlBAuf-gCn4--5UTqbH7Mx_kYX0"/>
</div>
<h5 class="text-lg font-bold">David Miller</h5>
<p class="text-sm text-primary font-medium">Diagnostic Technician</p>
</div>
<div class="group">
<div class="aspect-square bg-slate-200 rounded-lg overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary transition-all">
<img alt="Mechanic with wrench" class="w-full h-full object-cover" data-alt="Tire and brake specialist at work" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRP7ekKgk9yGIssdJz0_vKNhx5ihe3nhS7QtRUls6IDbk9ptJv-LB-rqB1f1eqcx_ox4wvClB78CpKDIVpG-dlxItrzj-biePQxYt5gifadStGHsYjnyO7CR4WGbRTrW5uIduyX7ZIDmJq_dmbVJhmJoLYxnYlStAZ4MWrdG4SczEk4q1dlQDPabf7cAtMI4D-wkTIQSqbbC3cPXprHwMsE2qMLh-Ws2Fw_J1pA0JPjrsB7fBCspERD3SRQuoI9xkjGG6exxsoQsg"/>
</div>
<h5 class="text-lg font-bold">Alex Rivera</h5>
<p class="text-sm text-primary font-medium">Chassis &amp; Brake Expert</p>
</div>
</div>
</div>
</section>
<!-- Testimonials -->
<section class="px-4 md:px-20 lg:px-40 py-20 bg-background-light dark:bg-background-dark/50">
<div class="max-w-[1200px] mx-auto">
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<div class="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm italic">
<div class="flex text-yellow-400 mb-4">
<span class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span>
</div>
<p class="text-slate-custom dark:text-slate-300 mb-6">"Absolutely the best service in town. They treated my vintage Porsche with such care. The detailing was flawless."</p>
<div class="flex items-center gap-4 not-italic">
<div class="size-10 rounded-full bg-slate-300 overflow-hidden">
<img alt="Customer avatar" data-alt="Portrait of a satisfied customer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLWh9r6z6yw-ShndvFwseo2WNLWBtCPxmHtQT31RiXTAKDvHh_M44utE0cGPfr7-QRHivNwh_vbZ_IAW3_i59LFhDee1f1HV8XTuOj8FyIG9bvon5WoJRWuvK24HjFfcXEqgIKtVny6XDqvNxOVfWmBQT8IFEWyyyzMgFatlZWoD1yp_PII8d7kJpF8H3raBsUJTUwB-LJodyfscP8hfpvwDYQ1_WfE-8NkHEpyT9FFgJrc6QSzwZ5oXPlr-W0iIdDI4MaoxGhGLA"/>
</div>
<div>
<p class="font-bold text-sm">Robert James</p>
<p class="text-xs text-slate-400">Porsche 911 Owner</p>
</div>
</div>
</div>
<div class="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm italic">
<div class="flex text-yellow-400 mb-4">
<span class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span>
</div>
<p class="text-slate-custom dark:text-slate-300 mb-6">"Transparent pricing and really fast turnaround. They explained everything they did on my engine overhaul. Highly recommend."</p>
<div class="flex items-center gap-4 not-italic">
<div class="size-10 rounded-full bg-slate-300 overflow-hidden">
<img alt="Customer avatar" data-alt="Portrait of a happy customer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJoQQG6px1vbEdM1jXuCDV9XnqgM_Yu1skJ96eXJML4-jB_TRJoIC3WAE4aeJb-nELTlV0-aOwDfF8z2bW0e3adrW3Y8fuQ_11VpyHoLfZcdss7BPUZLyTKUOuc8XuAyRwvDIslPqq0_C7Gw1OtvpaoiTEV9tAEhT986Fdv6q4D2c-2gOfHYP6gBkVdfkrOafaRhrk_6ADatQBqQrv1Ww2wPBNSJhEel8kwXBLj_a-Q0LkKknFc5wsCt3bqmqYKqcYLEywRcpFWls"/>
</div>
<div>
<p class="font-bold text-sm">Elena Petrova</p>
<p class="text-xs text-slate-400">Audi Q7 Owner</p>
</div>
</div>
</div>
<div class="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm italic">
<div class="flex text-yellow-400 mb-4">
<span class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span>
</div>
<p class="text-slate-custom dark:text-slate-300 mb-6">"The only shop I trust with my daily driver. Friendly staff and they always have the parts in stock."</p>
<div class="flex items-center gap-4 not-italic">
<div class="size-10 rounded-full bg-slate-300 overflow-hidden">
<img alt="Customer avatar" data-alt="Portrait of regular customer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV-vGVzVYrGEkMHXZZ9eRCrPw0vzytLpUo69-PKQAMKR6rr9cLr8-GH4zrHViNl7sabxg6eslV2PKfRki6Olb9bWI2Zdqulj4ZCSo1t_6WUss13CCPCy5jRIepfl6NmZ5hRbw-RjsXX-3KlrZbFYLyOa_3eOPtf11-aitWgAw_8LGbkDLiQGMuYoUQiVZ2POr0kAzwzRsf7SI2-YjgKbNRGzOg-7lVQHbrC4Jzs9AIZMzO1bTiJNG-3BPNqEt-gyQKm-D3jt-1Dog"/>
</div>
<div>
<p class="font-bold text-sm">Michael Scott</p>
<p class="text-xs text-slate-400">Honda Accord Owner</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Contact / Appointment -->
<section class="px-4 md:px-20 lg:px-40 py-20" id="contact">
<div class="max-w-[1200px] mx-auto">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 class="text-3xl font-bold mb-8">Get In Touch</h2>
<div class="space-y-6">
<div class="flex items-start gap-4">
<div class="text-primary mt-1"><span class="material-symbols-outlined">location_on</span></div>
<div>
<h6 class="font-bold">Our Location</h6>
<p class="text-slate-custom dark:text-slate-400">123 Mechanic Lane, Tech City, TC 90210</p>
</div>
</div>
<div class="flex items-start gap-4">
<div class="text-primary mt-1"><span class="material-symbols-outlined">call</span></div>
<div>
<h6 class="font-bold">Phone Number</h6>
<p class="text-slate-custom dark:text-slate-400">+1 (555) 012-3456</p>
</div>
</div>
<div class="flex items-start gap-4">
<div class="text-primary mt-1"><span class="material-symbols-outlined">schedule</span></div>
<div>
<h6 class="font-bold">Opening Hours</h6>
<p class="text-slate-custom dark:text-slate-400">Mon - Sat: 8:00 AM - 7:00 PM</p>
</div>
</div>
</div>
<div class="mt-10 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 h-64 grayscale contrast-125">
<img alt="Map view" class="w-full h-full object-cover" data-location="Chicago" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz2zKNmnwgRTV97yyKIurTfQf7ZAKz4ZllwsaoR_8hdc54xGuZpNIWUP5As4cJ08tOQPAhy2XVA8cxmFO-KO2ZwZylDYLEkgUvXnG8_feR4jARTia4qku5yLFYGbv0-g_mwPTqBNa1fOGBEgRVRMTBOeWcjD18zzMcHjEOKjA8hZEMlN3wt02TIEyf0nH1Sruq5dKtVKPisMPOJF3i9_Xccjtq1oTEzbeZ-sV8lcpZZ7vIvjK8ZtgfyosA2b8JvI8MN0clwrY51eA"/>
</div>
</div>
<div class="bg-white dark:bg-slate-800 p-10 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700">
<h3 class="text-2xl font-bold mb-6">Quick Appointment</h3>
<form class="space-y-4">
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label class="block text-sm font-medium mb-1">Full Name</label>
<input class="w-full rounded-lg border-slate-200 dark:border-slate-600 dark:bg-slate-700 focus:ring-primary focus:border-primary" placeholder="John Doe" type="text"/>
</div>
<div>
<label class="block text-sm font-medium mb-1">Phone</label>
<input class="w-full rounded-lg border-slate-200 dark:border-slate-600 dark:bg-slate-700 focus:ring-primary focus:border-primary" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
<div>
<label class="block text-sm font-medium mb-1">Service Type</label>
<select class="w-full rounded-lg border-slate-200 dark:border-slate-600 dark:bg-slate-700 focus:ring-primary focus:border-primary">
<option>General Maintenance</option>
<option>Detailing &amp; Wash</option>
<option>Engine Repair</option>
<option>Brake Service</option>
</select>
</div>
<div>
<label class="block text-sm font-medium mb-1">Vehicle Details</label>
<input class="w-full rounded-lg border-slate-200 dark:border-slate-600 dark:bg-slate-700 focus:ring-primary focus:border-primary" placeholder="Make, Model, Year" type="text"/>
</div>
<div>
<label class="block text-sm font-medium mb-1">Message (Optional)</label>
<textarea class="w-full rounded-lg border-slate-200 dark:border-slate-600 dark:bg-slate-700 focus:ring-primary focus:border-primary" placeholder="Tell us more about your car's issue" rows="3"></textarea>
</div>
<button class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-primary/30" type="submit">
                            Book Appointment Now
                        </button>
</form>
</div>
</div>
</div>
</section>
<!-- Footer -->
<footer class="bg-dark-custom text-white px-4 md:px-20 lg:px-40 py-12">
<div class="max-w-[1200px] mx-auto border-t border-white/10 pt-12">
<div class="grid grid-cols-1 md:grid-cols-4 gap-12">
<div class="col-span-1 md:col-span-1">
<div class="flex items-center gap-3 mb-6">
<div class="text-primary">
<svg class="w-8 h-8" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h1 class="text-xl font-bold tracking-tight">AutoPro Services</h1>
</div>
<p class="text-slate-400 text-sm leading-relaxed">Defining the future of car maintenance through technology and artisan craftsmanship.</p>
</div>
<div>
<h6 class="font-bold mb-6">Quick Links</h6>
<ul class="space-y-4 text-sm text-slate-400">
<li><a class="hover:text-primary transition-colors" href="#">Our Services</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Maintenance Plans</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Meet the Team</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Customer Reviews</a></li>
</ul>
</div>
<div>
<h6 class="font-bold mb-6">Support</h6>
<ul class="space-y-4 text-sm text-slate-400">
<li><a class="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
<li><a class="hover:text-primary transition-colors" href="#">FAQ</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Contact Support</a></li>
</ul>
</div>
<div>
<h6 class="font-bold mb-6">Newsletter</h6>
<p class="text-sm text-slate-400 mb-4">Get seasonal maintenance tips and exclusive offers.</p>
<div class="flex gap-2">
<input class="bg-white/5 border-white/10 rounded-lg text-sm flex-1 focus:ring-primary" placeholder="Your email" type="email"/>
<button class="bg-primary px-4 rounded-lg"><span class="material-symbols-outlined text-sm">send</span></button>
</div>
</div>
</div>
<div class="mt-16 pt-8 border-t border-white/5 text-center text-slate-500 text-xs">
                © 2024 AutoPro Services Inc. All rights reserved. Precision in every turn.
            </div>
</div>
</footer>
