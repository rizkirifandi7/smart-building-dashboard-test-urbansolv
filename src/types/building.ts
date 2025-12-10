export interface BuildingData {
  building: string;
  summary: {
    energyTodayKwh: number;
    avgTemperature: number;
    avgCO2: number;
    airQuality: string;
  };
  rooms: Room[];
  energyTrend: Array<{ hour: string; kwh: number }>;
  temperatureTrend: Array<{ hour: string; temp: number }>;
}

export interface Room {
  id: number;
  name: string;
  floor: number;
  temperature: number;
  co2: number;
  humidity: number;
  status: "Normal" | "Warning" | "Alert";
}
