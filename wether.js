let data = [
    {
        "id": 1,
        "city": "New York",
        "country": "United States",
        "latitude": 40.7128,
        "longitude": -74.006,
        "temperature": 25,
        "weather_description": "Clear sky",
        "humidity": 50,
        "wind_speed": 10,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 24,
                "weather_description": "Partly cloudy",
                "humidity": 55,
                "wind_speed": 12
            },
            {
                "date": "2023-07-29",
                "temperature": 26,
                "weather_description": "Sunny",
                "humidity": 48,
                "wind_speed": 9
            }
        ]
    },
    {
        "id": 2,
        "city": "London",
        "country": "United Kingdom",
        "latitude": 51.5074,
        "longitude": -0.1278,
        "temperature": 18,
        "weather_description": "Partly cloudy",
        "humidity": 60,
        "wind_speed": 8,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 17,
                "weather_description": "Cloudy",
                "humidity": 62,
                "wind_speed": 10
            },
            {
                "date": "2023-07-29",
                "temperature": 19,
                "weather_description": "Partly cloudy",
                "humidity": 58,
                "wind_speed": 7
            }
        ]
    },
    {
        "id": 3,
        "city": "Los Angeles",
        "country": "United States",
        "latitude": 34.0522,
        "longitude": -118.2437,
        "temperature": 30.2,
        "weather_description": "Sunny",
        "humidity": 50,
        "wind_speed": 6.8,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 31,
                "weather_description": "Clear sky",
                "humidity": 52,
                "wind_speed": 7
            },
            {
                "date": "2023-07-29",
                "temperature": 29,
                "weather_description": "Sunny",
                "humidity": 48,
                "wind_speed": 6
            }
        ]
    },
    {
        "id": 4,
        "city": "Tokyo",
        "country": "Japan",
        "latitude": 35.6895,
        "longitude": 139.6917,
        "temperature": 28.7,
        "weather_description": "Partly Cloudy",
        "humidity": 70,
        "wind_speed": 7,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 27,
                "weather_description": "Cloudy",
                "humidity": 72,
                "wind_speed": 8
            },
            {
                "date": "2023-07-29",
                "temperature": 30,
                "weather_description": "Partly cloudy",
                "humidity": 68,
                "wind_speed": 6
            }
        ]
    },
    {
        "id": 5,
        "city": "Mumbai",
        "country": "India",
        "latitude": 19.076,
        "longitude": 72.8777,
        "temperature": 30.5,
        "weather_description": "Sunny",
        "humidity": 65,
        "wind_speed": 7.5,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 29,
                "weather_description": "Sunny",
                "humidity": 68,
                "wind_speed": 6
            },
            {
                "date": "2023-07-29",
                "temperature": 31,
                "weather_description": "Clear sky",
                "humidity": 62,
                "wind_speed": 8
            }
        ]
    },
    {
        "id": 6,
        "city": "Chicago",
        "country": "United States",
        "latitude": 41.8781,
        "longitude": -87.6298,
        "temperature": 26.5,
        "weather_description": "Cloudy",
        "humidity": 55,
        "wind_speed": 8.2,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 25,
                "weather_description": "Cloudy",
                "humidity": 57,
                "wind_speed": 7
            },
            {
                "date": "2023-07-29",
                "temperature": 27,
                "weather_description": "Partly cloudy",
                "humidity": 53,
                "wind_speed": 8
            }
        ]
    },
    {
        "id": 7,
        "city": "Toronto",
        "country": "Canada",
        "latitude": 43.65107,
        "longitude": -79.347015,
        "temperature": 24.3,
        "weather_description": "Rain showers",
        "humidity": 65,
        "wind_speed": 10,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 23,
                "weather_description": "Rainy",
                "humidity": 68,
                "wind_speed": 11
            },
            {
                "date": "2023-07-29",
                "temperature": 25,
                "weather_description": "Rain showers",
                "humidity": 63,
                "wind_speed": 9
            }
        ]
    },
    {
        "id": 8,
        "city": "Sydney",
        "country": "Australia",
        "latitude": -33.8688,
        "longitude": 151.2093,
        "temperature": 22.1,
        "weather_description": "Sunny",
        "humidity": 40,
        "wind_speed": 12.5,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 23,
                "weather_description": "Clear sky",
                "humidity": 42,
                "wind_speed": 13
            },
            {
                "date": "2023-07-29",
                "temperature": 21,
                "weather_description": "Sunny",
                "humidity": 38,
                "wind_speed": 11
            }
        ]
    },
    {
        "id": 9,
        "city": "Paris",
        "country": "France",
        "latitude": 48.8566,
        "longitude": 2.3522,
        "temperature": 20.5,
        "weather_description": "Partly Cloudy",
        "humidity": 55,
        "wind_speed": 6.8,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 19,
                "weather_description": "Cloudy",
                "humidity": 58,
                "wind_speed": 7
            },
            {
                "date": "2023-07-29",
                "temperature": 21,
                "weather_description": "Partly cloudy",
                "humidity": 53,
                "wind_speed": 6
            }
        ]
    },
    {
        "id": 10,
        "city": "Moscow",
        "country": "Russia",
        "latitude": 55.7558,
        "longitude": 37.6176,
        "temperature": 18.9,
        "weather_description": "Cloudy",
        "humidity": 70,
        "wind_speed": 5,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 18,
                "weather_description": "Cloudy",
                "humidity": 72,
                "wind_speed": 6
            },
            {
                "date": "2023-07-29",
                "temperature": 20,
                "weather_description": "Partly cloudy",
                "humidity": 68,
                "wind_speed": 4
            }
        ]
    },
    {
        "id": 11,
        "city": "Mexico City",
        "country": "Mexico",
        "latitude": 19.4326,
        "longitude": -99.1332,
        "temperature": 23.8,
        "weather_description": "Rain showers",
        "humidity": 70,
        "wind_speed": 6.8,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 22,
                "weather_description": "Rainy",
                "humidity": 72,
                "wind_speed": 7
            },
            {
                "date": "2023-07-29",
                "temperature": 25,
                "weather_description": "Rain showers",
                "humidity": 68,
                "wind_speed": 6
            }
        ]
    },
    {
        "id": 12,
        "city": "Rio de Janeiro",
        "country": "Brazil",
        "latitude": -22.9068,
        "longitude": -43.1729,
        "temperature": 28.6,
        "weather_description": "Partly cloudy",
        "humidity": 60,
        "wind_speed": 10.5,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 27,
                "weather_description": "Partly cloudy",
                "humidity": 62,
                "wind_speed": 9
            },
            {
                "date": "2023-07-29",
                "temperature": 29,
                "weather_description": "Sunny",
                "humidity": 58,
                "wind_speed": 11
            }
        ]
    },
    {
        "id": 13,
        "city": "Cairo",
        "country": "Egypt",
        "latitude": 30.0444,
        "longitude": 31.2357,
        "temperature": 33.2,
        "weather_description": "Clear sky",
        "humidity": 40,
        "wind_speed": 8,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 32,
                "weather_description": "Clear sky",
                "humidity": 42,
                "wind_speed": 7
            },
            {
                "date": "2023-07-29",
                "temperature": 34,
                "weather_description": "Sunny",
                "humidity": 38,
                "wind_speed": 9
            }
        ]
    },
    {
        "id": 14,
        "city": "Shanghai",
        "country": "China",
        "latitude": 31.2304,
        "longitude": 121.4737,
        "temperature": 29.8,
        "weather_description": "Cloudy",
        "humidity": 55,
        "wind_speed": 6.2,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 28,
                "weather_description": "Cloudy",
                "humidity": 58,
                "wind_speed": 5
            },
            {
                "date": "2023-07-29",
                "temperature": 30,
                "weather_description": "Partly cloudy",
                "humidity": 52,
                "wind_speed": 7
            }
        ]
    },
    {
        "id": 15,
        "city": "São Paulo",
        "country": "Brazil",
        "latitude": -23.5505,
        "longitude": -46.6333,
        "temperature": 26.7,
        "weather_description": "Partly cloudy",
        "humidity": 62,
        "wind_speed": 9.4,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 25,
                "weather_description": "Partly cloudy",
                "humidity": 64,
                "wind_speed": 8
            },
            {
                "date": "2023-07-29",
                "temperature": 27,
                "weather_description": "Sunny",
                "humidity": 60,
                "wind_speed": 10
            }
        ]
    },
    {
        "id": 16,
        "city": "Istanbul",
        "country": "Turkey",
        "latitude": 41.0082,
        "longitude": 28.9784,
        "temperature": 31.9,
        "weather_description": "Sunny",
        "humidity": 45,
        "wind_speed": 7.7,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 30,
                "weather_description": "Sunny",
                "humidity": 48,
                "wind_speed": 7
            },
            {
                "date": "2023-07-29",
                "temperature": 33,
                "weather_description": "Clear sky",
                "humidity": 42,
                "wind_speed": 8
            }
        ]
    },
    {
        "id": 17,
        "city": "Kolkata",
        "country": "India",
        "latitude": 22.5726,
        "longitude": 88.3639,
        "temperature": 31.5,
        "weather_description": "Partly cloudy",
        "humidity": 70,
        "wind_speed": 8.3,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 32,
                "weather_description": "Partly cloudy",
                "humidity": 68,
                "wind_speed": 8.5
            },
            {
                "date": "2023-07-29",
                "temperature": 33,
                "weather_description": "Partly cloudy",
                "humidity": 65,
                "wind_speed": 8
            }
        ]
    },
    {
        "id": 18,
        "city": "Berlin",
        "country": "Germany",
        "latitude": 52.52,
        "longitude": 13.405,
        "temperature": 25.2,
        "weather_description": "Sunny",
        "humidity": 45,
        "wind_speed": 6.5,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 24,
                "weather_description": "Sunny",
                "humidity": 48,
                "wind_speed": 5
            },
            {
                "date": "2023-07-29",
                "temperature": 26,
                "weather_description": "Clear sky",
                "humidity": 42,
                "wind_speed": 7
            }
        ]
    },
    {
        "id": 19,
        "city": "Dubai",
        "country": "United Arab Emirates",
        "latitude": 25.276987,
        "longitude": 55.296249,
        "temperature": 39,
        "weather_description": "Clear sky",
        "humidity": 30,
        "wind_speed": 14,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 38,
                "weather_description": "Clear sky",
                "humidity": 32,
                "wind_speed": 13
            },
            {
                "date": "2023-07-29",
                "temperature": 40,
                "weather_description": "Sunny",
                "humidity": 28,
                "wind_speed": 15
            }
        ]
    },
    {
        "id": 20,
        "city": "Seoul",
        "country": "South Korea",
        "latitude": 37.5665,
        "longitude": 126.978,
        "temperature": 28.4,
        "weather_description": "Partly cloudy",
        "humidity": 65,
        "wind_speed": 7.4,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 27,
                "weather_description": "Partly cloudy",
                "humidity": 68,
                "wind_speed": 6
            },
            {
                "date": "2023-07-29",
                "temperature": 29,
                "weather_description": "Sunny",
                "humidity": 62,
                "wind_speed": 8
            }
        ]
    },
    {
        "id": 21,
        "city": "Auckland",
        "country": "New Zealand",
        "latitude": -36.8485,
        "longitude": 174.7633,
        "temperature": 16.9,
        "weather_description": "Cloudy",
        "humidity": 65,
        "wind_speed": 14.8,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 15,
                "weather_description": "Cloudy",
                "humidity": 68,
                "wind_speed": 12
            },
            {
                "date": "2023-07-29",
                "temperature": 18,
                "weather_description": "Partly cloudy",
                "humidity": 62,
                "wind_speed": 16
            }
        ]
    },
    {
        "id": 22,
        "city": "Barcelona",
        "country": "Spain",
        "latitude": 41.3851,
        "longitude": 2.1734,
        "temperature": 26.3,
        "weather_description": "Sunny",
        "humidity": 53,
        "wind_speed": 9.2,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 25,
                "weather_description": "Sunny",
                "humidity": 56,
                "wind_speed": 8
            },
            {
                "date": "2023-07-29",
                "temperature": 27,
                "weather_description": "Clear sky",
                "humidity": 50,
                "wind_speed": 10
            }
        ]
    },
    {
        "id": 23,
        "city": "Cape Town",
        "country": "South Africa",
        "latitude": -33.9249,
        "longitude": 18.4241,
        "temperature": 19.7,
        "weather_description": "Partly cloudy",
        "humidity": 58,
        "wind_speed": 11.6,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 18,
                "weather_description": "Partly cloudy",
                "humidity": 61,
                "wind_speed": 10
            },
            {
                "date": "2023-07-29",
                "temperature": 21,
                "weather_description": "Sunny",
                "humidity": 55,
                "wind_speed": 12
            }
        ]
    },
    {
        "id": 24,
        "city": "Havana",
        "country": "Cuba",
        "latitude": 23.1136,
        "longitude": -82.3666,
        "temperature": 31.8,
        "weather_description": "Sunny",
        "humidity": 70,
        "wind_speed": 11.8,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 30,
                "weather_description": "Sunny",
                "humidity": 73,
                "wind_speed": 10
            },
            {
                "date": "2023-07-29",
                "temperature": 33,
                "weather_description": "Clear sky",
                "humidity": 68,
                "wind_speed": 12
            }
        ]
    },
    {
        "id": 25,
        "city": "Montreal",
        "country": "Canada",
        "latitude": 45.5017,
        "longitude": -73.5673,
        "temperature": 22.5,
        "weather_description": "Partly cloudy",
        "humidity": 60,
        "wind_speed": 10.8,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 21,
                "weather_description": "Sunny",
                "humidity": 62,
                "wind_speed": 9.5
            },
            {
                "date": "2023-07-29",
                "temperature": 23,
                "weather_description": "Partly cloudy",
                "humidity": 58,
                "wind_speed": 11.2
            }
        ]
    },
    {
        "id": 26,
        "city": "Kyoto",
        "country": "Japan",
        "latitude": 35.0116,
        "longitude": 135.7681,
        "temperature": 26.5,
        "weather_description": "Partly cloudy",
        "humidity": 60,
        "wind_speed": 8.1,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 25,
                "weather_description": "Partly cloudy",
                "humidity": 63,
                "wind_speed": 7
            },
            {
                "date": "2023-07-29",
                "temperature": 27,
                "weather_description": "Sunny",
                "humidity": 58,
                "wind_speed": 9
            }
        ]
    },
    {
        "id": 27,
        "city": "Lima",
        "country": "Peru",
        "latitude": -12.0464,
        "longitude": -77.0428,
        "temperature": 20.8,
        "weather_description": "Cloudy",
        "humidity": 75,
        "wind_speed": 14.2,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 19,
                "weather_description": "Cloudy",
                "humidity": 78,
                "wind_speed": 12
            },
            {
                "date": "2023-07-29",
                "temperature": 22,
                "weather_description": "Partly cloudy",
                "humidity": 72,
                "wind_speed": 16
            }
        ]
    },
    {
        "id": 28,
        "city": "Nairobi",
        "country": "Kenya",
        "latitude": -1.2921,
        "longitude": 36.8219,
        "temperature": 24.3,
        "weather_description": "Sunny",
        "humidity": 40,
        "wind_speed": 9.5,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 23,
                "weather_description": "Sunny",
                "humidity": 42,
                "wind_speed": 8
            },
            {
                "date": "2023-07-29",
                "temperature": 26,
                "weather_description": "Clear sky",
                "humidity": 38,
                "wind_speed": 10
            }
        ]
    },
    {
        "id": 29,
        "city": "Oslo",
        "country": "Norway",
        "latitude": 59.9139,
        "longitude": 10.7522,
        "temperature": 17.9,
        "weather_description": "Partly cloudy",
        "humidity": 55,
        "wind_speed": 7.8,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 16,
                "weather_description": "Partly cloudy",
                "humidity": 58,
                "wind_speed": 6
            },
            {
                "date": "2023-07-29",
                "temperature": 19,
                "weather_description": "Sunny",
                "humidity": 52,
                "wind_speed": 8
            }
        ]
    },
    {
        "id": 30,
        "city": "Zurich",
        "country": "Switzerland",
        "latitude": 47.3769,
        "longitude": 8.5417,
        "temperature": 21.2,
        "weather_description": "Cloudy",
        "humidity": 70,
        "wind_speed": 10.3,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 20,
                "weather_description": "Cloudy",
                "humidity": 72,
                "wind_speed": 9
            },
            {
                "date": "2023-07-29",
                "temperature": 22,
                "weather_description": "Partly cloudy",
                "humidity": 68,
                "wind_speed": 11
            }
        ]
    },
    {
        "id": 31,
        "city": "Osaka",
        "country": "Japan",
        "latitude": 34.6937,
        "longitude": 135.5023,
        "temperature": 26.1,
        "weather_description": "Sunny",
        "humidity": 55,
        "wind_speed": 10,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 25,
                "weather_description": "Sunny",
                "humidity": 58,
                "wind_speed": 10.5
            },
            {
                "date": "2023-07-29",
                "temperature": 27,
                "weather_description": "Sunny",
                "humidity": 52,
                "wind_speed": 9.3
            }
        ]
    },
    {
        "id": 32,
        "city": "Riyadh",
        "country": "Saudi Arabia",
        "latitude": 24.7136,
        "longitude": 46.6753,
        "temperature": 39.5,
        "weather_description": "Clear sky",
        "humidity": 15,
        "wind_speed": 12.7,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 38,
                "weather_description": "Clear sky",
                "humidity": 17,
                "wind_speed": 13.2
            },
            {
                "date": "2023-07-29",
                "temperature": 40,
                "weather_description": "Clear sky",
                "humidity": 13,
                "wind_speed": 12
            }
        ]
    },
    {
        "id": 33,
        "city": "Bogotá",
        "country": "Colombia",
        "latitude": 4.711,
        "longitude": -74.0721,
        "temperature": 14.6,
        "weather_description": "Rain",
        "humidity": 85,
        "wind_speed": 5.5,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 13,
                "weather_description": "Rain",
                "humidity": 88,
                "wind_speed": 6
            },
            {
                "date": "2023-07-29",
                "temperature": 15,
                "weather_description": "Rain",
                "humidity": 82,
                "wind_speed": 5.3
            }
        ]
    },
    {
        "id": 34,
        "city": "Jakarta",
        "country": "Indonesia",
        "latitude": -6.2088,
        "longitude": 106.8456,
        "temperature": 29.8,
        "weather_description": "Scattered clouds",
        "humidity": 70,
        "wind_speed": 8.8,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 28,
                "weather_description": "Scattered clouds",
                "humidity": 73,
                "wind_speed": 9.3
            },
            {
                "date": "2023-07-29",
                "temperature": 30,
                "weather_description": "Scattered clouds",
                "humidity": 68,
                "wind_speed": 8.1
            }
        ]
    },
    {
        "id": 35,
        "city": "Buenos Aires",
        "country": "Argentina",
        "latitude": -34.6118,
        "longitude": -58.4173,
        "temperature": 18.2,
        "weather_description": "Partly cloudy",
        "humidity": 75,
        "wind_speed": 9.5,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 17,
                "weather_description": "Partly cloudy",
                "humidity": 78,
                "wind_speed": 10.2
            },
            {
                "date": "2023-07-29",
                "temperature": 19,
                "weather_description": "Partly cloudy",
                "humidity": 72,
                "wind_speed": 8.8
            }
        ]
    },
    {
        "id": 36,
        "city": "Johannesburg",
        "country": "South Africa",
        "latitude": -26.2041,
        "longitude": 28.0473,
        "temperature": 21.8,
        "weather_description": "Clear sky",
        "humidity": 52,
        "wind_speed": 8.3,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 20,
                "weather_description": "Clear sky",
                "humidity": 55,
                "wind_speed": 7.5
            },
            {
                "date": "2023-07-29",
                "temperature": 23,
                "weather_description": "Sunny",
                "humidity": 48,
                "wind_speed": 9.2
            }
        ]
    },
    {
        "id": 37,
        "city": "Singapore",
        "country": "Singapore",
        "latitude": 1.3521,
        "longitude": 103.8198,
        "temperature": 28.2,
        "weather_description": "Partly cloudy",
        "humidity": 75,
        "wind_speed": 10.1,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 27,
                "weather_description": "Partly cloudy",
                "humidity": 78,
                "wind_speed": 9.5
            },
            {
                "date": "2023-07-29",
                "temperature": 29,
                "weather_description": "Partly cloudy",
                "humidity": 72,
                "wind_speed": 10.8
            }
        ]
    },
    {
        "id": 38,
        "city": "Taipei",
        "country": "Taiwan",
        "latitude": 25.033,
        "longitude": 121.5654,
        "temperature": 31.5,
        "weather_description": "Partly cloudy",
        "humidity": 58,
        "wind_speed": 8.1,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 30,
                "weather_description": "Partly cloudy",
                "humidity": 60,
                "wind_speed": 8.5
            },
            {
                "date": "2023-07-29",
                "temperature": 32,
                "weather_description": "Sunny",
                "humidity": 56,
                "wind_speed": 7.8
            }
        ]
    },
    {
        "id": 39,
        "city": "Tehran",
        "country": "Iran",
        "latitude": 35.6892,
        "longitude": 51.389,
        "temperature": 33.2,
        "weather_description": "Sunny",
        "humidity": 28,
        "wind_speed": 6.2,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 32,
                "weather_description": "Sunny",
                "humidity": 30,
                "wind_speed": 6.5
            },
            {
                "date": "2023-07-29",
                "temperature": 34,
                "weather_description": "Sunny",
                "humidity": 26,
                "wind_speed": 5.8
            }
        ]
    },
    {
        "id": 40,
        "city": "Vancouver",
        "country": "Canada",
        "latitude": 49.2827,
        "longitude": -123.1207,
        "temperature": 21.8,
        "weather_description": "Partly cloudy",
        "humidity": 68,
        "wind_speed": 10.3,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 20,
                "weather_description": "Partly cloudy",
                "humidity": 70,
                "wind_speed": 11
            },
            {
                "date": "2023-07-29",
                "temperature": 22,
                "weather_description": "Partly cloudy",
                "humidity": 65,
                "wind_speed": 10
            }
        ]
    },
    {
        "id": 41,
        "city": "Melbourne",
        "country": "Australia",
        "latitude": -37.8136,
        "longitude": 144.9631,
        "temperature": 17.8,
        "weather_description": "Cloudy",
        "humidity": 55,
        "wind_speed": 11.8,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 18,
                "weather_description": "Cloudy",
                "humidity": 53,
                "wind_speed": 12
            },
            {
                "date": "2023-07-29",
                "temperature": 20,
                "weather_description": "Cloudy",
                "humidity": 50,
                "wind_speed": 11.5
            }
        ]
    },
    {
        "id": 42,
        "city": "Brisbane",
        "country": "Australia",
        "latitude": -27.4698,
        "longitude": 153.0251,
        "temperature": 22.3,
        "weather_description": "Sunny",
        "humidity": 48,
        "wind_speed": 13.6,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 23,
                "weather_description": "Sunny",
                "humidity": 46,
                "wind_speed": 14
            },
            {
                "date": "2023-07-29",
                "temperature": 24,
                "weather_description": "Sunny",
                "humidity": 45,
                "wind_speed": 13.5
            }
        ]
    },
    {
        "id": 43,
        "city": "Perth",
        "country": "Australia",
        "latitude": -31.9505,
        "longitude": 115.8605,
        "temperature": 24.7,
        "weather_description": "Clear sky",
        "humidity": 40,
        "wind_speed": 16.5,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 25,
                "weather_description": "Clear sky",
                "humidity": 38,
                "wind_speed": 17
            },
            {
                "date": "2023-07-29",
                "temperature": 26,
                "weather_description": "Clear sky",
                "humidity": 36,
                "wind_speed": 16.5
            }
        ]
    },
    {
        "id": 44,
        "city": "Adelaide",
        "country": "Australia",
        "latitude": -34.9285,
        "longitude": 138.6007,
        "temperature": 18.1,
        "weather_description": "Partly cloudy",
        "humidity": 58,
        "wind_speed": 10.9,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 19,
                "weather_description": "Partly cloudy",
                "humidity": 56,
                "wind_speed": 11
            },
            {
                "date": "2023-07-29",
                "temperature": 20,
                "weather_description": "Partly cloudy",
                "humidity": 54,
                "wind_speed": 10.5
            }
        ]
    },
    {
        "id": 45,
        "city": "Canberra",
        "country": "Australia",
        "latitude": -35.2809,
        "longitude": 149.13,
        "temperature": 16.5,
        "weather_description": "Cloudy",
        "humidity": 60,
        "wind_speed": 11.2,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 17,
                "weather_description": "Cloudy",
                "humidity": 58,
                "wind_speed": 11.5
            },
            {
                "date": "2023-07-29",
                "temperature": 18,
                "weather_description": "Cloudy",
                "humidity": 56,
                "wind_speed": 11
            }
        ]
    },
    {
        "id": 45,
        "city": "Wellington",
        "country": "New Zealand",
        "latitude": -41.2865,
        "longitude": 174.7762,
        "temperature": 14.2,
        "weather_description": "Rainy",
        "humidity": 75,
        "wind_speed": 18.7,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 13,
                "weather_description": "Rainy",
                "humidity": 78,
                "wind_speed": 19
            },
            {
                "date": "2023-07-29",
                "temperature": 15,
                "weather_description": "Rainy",
                "humidity": 72,
                "wind_speed": 18.5
            }
        ]
    },
    {
        "id": 46,
        "city": "Christchurch",
        "country": "New Zealand",
        "latitude": -43.5321,
        "longitude": 172.6362,
        "temperature": 12.5,
        "weather_description": "Partly cloudy",
        "humidity": 62,
        "wind_speed": 14.1,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 13,
                "weather_description": "Partly cloudy",
                "humidity": 60,
                "wind_speed": 14.5
            },
            {
                "date": "2023-07-29",
                "temperature": 14,
                "weather_description": "Partly cloudy",
                "humidity": 58,
                "wind_speed": 14
            }
        ]
    },
    {
        "id": 47,
        "city": "Queenstown",
        "country": "New Zealand",
        "latitude": -45.0312,
        "longitude": 168.6626,
        "temperature": 10.2,
        "weather_description": "Clear sky",
        "humidity": 58,
        "wind_speed": 13.8,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 11,
                "weather_description": "Clear sky",
                "humidity": 56,
                "wind_speed": 14
            },
            {
                "date": "2023-07-29",
                "temperature": 12,
                "weather_description": "Clear sky",
                "humidity": 54,
                "wind_speed": 13.5
            }
        ]
    },
    {
        "id": 48,
        "city": "Edinburgh",
        "country": "United Kingdom",
        "latitude": 55.9533,
        "longitude": -3.1883,
        "temperature": 17.8,
        "weather_description": "Partly cloudy",
        "humidity": 68,
        "wind_speed": 10.2,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 18,
                "weather_description": "Partly cloudy",
                "humidity": 66,
                "wind_speed": 10.5
            },
            {
                "date": "2023-07-29",
                "temperature": 19,
                "weather_description": "Partly cloudy",
                "humidity": 64,
                "wind_speed": 10
            }
        ]
    },
    {
        "id": 49,
        "city": "Dublin",
        "country": "Ireland",
        "latitude": 53.3498,
        "longitude": -6.2603,
        "temperature": 16.5,
        "weather_description": "Cloudy",
        "humidity": 72,
        "wind_speed": 11.5,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 17,
                "weather_description": "Cloudy",
                "humidity": 70,
                "wind_speed": 11.8
            },
            {
                "date": "2023-07-29",
                "temperature": 18,
                "weather_description": "Cloudy",
                "humidity": 68,
                "wind_speed": 11.2
            }
        ]
    },
    {
        "id": 50,
        "city": "Lahore",
        "country": "Pakistan",
        "latitude": 31.5497,
        "longitude": 74.3436,
        "temperature": 34.5,
        "weather_description": "Sunny",
        "humidity": 35,
        "wind_speed": 9,
        "forecast": [
            {
                "date": "2023-07-28",
                "temperature": 33,
                "weather_description": "Sunny",
                "humidity": 38,
                "wind_speed": 8
            },
            {
                "date": "2023-07-29",
                "temperature": 35,
                "weather_description": "Clear sky",
                "humidity": 32,
                "wind_speed": 10
            }
        ]
    }
]
console.log(data);


let Fecthdata = async () => {
    try {
        let data = await fetch(data)

        let fecthdata = await data.json();
        // console.log(fecthdata);

        wetherrendring(fecthdata);

    } catch (error) {
        console.log(error);
    }
}
let container = document.querySelector(".container")
// console.log(container);

let wetherrendring = (fecthdata) => {
    data.forEach(index => {
        console.log(index);

        let div = document.createElement("div");
        // console.log(div);

        let city = document.createElement("h2");
        city.innerText = `state : ${index.city}`

        let country = document.createElement("h3");
        country.innerText = `country : ${index.country}`

        let temperature = document.createElement("h4");
        temperature.innerText = `temperature : ${index.temperature}`

        let weather_description = document.createElement("p");
        weather_description.innerText = `weather_description : ${index.weather_description}`

        let wind_speed = document.createElement("p");
        wind_speed.innerText = `wind_speed : ${index.wind_speed}`

        div.append(city, country, temperature, weather_description, wind_speed);

        container.append(div);
    });
}



wetherrendring();