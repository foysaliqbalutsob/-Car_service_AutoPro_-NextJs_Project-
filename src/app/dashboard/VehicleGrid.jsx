export default function VehicleGrid({ vehicles }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">My Vehicles</h2>
        <button className="text-sm font-bold text-primary">+ Add Vehicle</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vehicles.map((car, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden group hover:shadow-lg transition-all">
            <div className="h-32 bg-slate-200 relative overflow-hidden">
              <img src={car.image} alt={car.model} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div className={`absolute top-3 right-3 px-3 py-1 text-[10px] font-black rounded-full text-white ${car.statusColor}`}>
                {car.statusText}
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-lg">{car.model}</h4>
              <p className="text-xs text-slate-500 mb-4">VIN: {car.vin}</p>
              <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs">
                  <p className="text-slate-500">Last Service</p>
                  <p className="font-bold">{car.lastService}</p>
                </div>
                <button className="btn btn-sm btn-ghost text-primary">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}