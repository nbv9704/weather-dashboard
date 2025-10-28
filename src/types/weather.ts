export interface CurrentWeather {
  temp_c: number;
  feelslike_c: number;
  humidity: number;
  pressure_mb: number;
  wind_kph: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  last_updated_epoch: number;
}

export interface HourlyForecast {
  time_epoch: number;
  time: string;  // ✅ THÊM DÒNG NÀY
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
}

export interface DailyForecast {
  date: string;  // ✅ THÊM DÒNG NÀY
  date_epoch: number;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  hour: HourlyForecast[];  // ✅ THÊM DÒNG NÀY
}

export interface Location {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

// ✅ QUAN TRỌNG: WeatherData phải khớp với response từ API
export interface WeatherData {
  location: {
    name: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: CurrentWeather;
  forecast: {
    forecastday: DailyForecast[];  // ✅ SỬ DỤNG DailyForecast thay vì inline
  };
}