export interface Weather {
    name?: string;
    main: { temp: number, feels_like: number, pressure: number, humidity: number };
    weather: [{ icon: any }];
}
