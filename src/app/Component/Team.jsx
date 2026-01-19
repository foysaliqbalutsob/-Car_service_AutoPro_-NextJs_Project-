const team = [
  { name: "Marcus Chen", role: "Lead Engine Specialist", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQZaPsMF-D5SDejLCW9x5zPtsPwJCB018fOWAdJK9C7Q8DR3c55u_uwb3j7bvA9CTnEQX2yreAGRNQj9hiNJXkRBAMmnphijDH0ofLRYDk3lDzK2CuEtKh62t8h0xVT9j-Qpe4k1FyLfrgITjvJeG0NxCeX-aC2V8RhMAwYnqjM3Mk6r5czDApSikHr6a4A5R6phJnos2i4iyF3D58vMzSWy1B7PbY7GbBSDEIVz6jSnmf-hdieHqRI3rt1cP7JHsVLwKxtD7L_fU" },
  { name: "Sarah Williams", role: "Aesthetic Detailing Pro", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_8pm4ZTFYZoKBymdjs3lxDb7C5BGFNqHM60ShvIw3ZM0wrnL2a4iiyq4rR-2Fq2k9KkUVJbvNJ4yfwPCEMTFaiYSvpPyi-gSTIBFgMI8f1hkun3p6voWRFyc5yCfHteURRURQnC_zSycWv9wDx3aGn5zciHyuGG3DMCP8rxyEpweTLVTBiT0E0lP5YjDAKdZ4OKZI-Vm2s330MvUMDiJ7zOdiXyceR4eoVb2JTILaqII4iQEDKu2ANW6CMxfOR8Ds8keV6sRdAKE" },
  { name: "David Miller", role: "Diagnostic Technician", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCreN2ZG5NAx8xc9SQ-QfYPAKWAyMK9q-3DpKBQzbMK2wx_rcMaREwYhwmU-kSAquXGnaQgUU7CDHKxavjABgvt1UcljcIaatA1iEKEax1DGj2ok4hlUBec2QcbFCjvaWIzNVDQv-8Sc8iPuAihrZaGyLaQqCfjMrDK6SMfBZVKyX286F6YZEjR41kbrWQBJbgQRhLeUUHBEK8Qi4liNtlN5t2ZFjXCvaY8885Tgh372vssE7AbQlBAuf-gCn4--5UTqbH7Mx_kYX0" },
  { name: "Alex Rivera", role: "Chassis & Brake Expert", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRP7ekKgk9yGIssdJz0_vKNhx5ihe3nhS7QtRUls6IDbk9ptJv-LB-rqB1f1eqcx_ox4wvClB78CpKDIVpG-dlxItrzj-biePQxYt5gifadStGHsYjnyO7CR4WGbRTrW5uIduyX7ZIDmJq_dmbVJhmJoLYxnYlStAZ4MWrdG4SczEk4q1dlQDPabf7cAtMI4D-wkTIQSqbbC3cPXprHwMsE2qMLh-Ws2Fw_J1pA0JPjrsB7fBCspERD3SRQuoI9xkjGG6exxsoQsg" },
];

export default function Team() {
  return (
    <section className="px-4 md:px-20 lg:px-40 py-20" id="mechanics">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-bold mb-2">Our Expert Team</h2>
        <p className="text-slate-custom mb-12">The skilled hands behind every perfect service.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="group">
              <div className="aspect-square bg-slate-200 rounded-lg overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary transition-all">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h5 className="text-lg font-bold">{member.name}</h5>
              <p className="text-sm text-primary font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}