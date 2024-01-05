import { useState } from 'react';
import "./HeatMapCalendar.css";

type ActivityData = {
    [date: string]: boolean;
};

const HeatMapCalendar = () => {
    const currentYear = new Date().getFullYear();
    const previousYear = currentYear - 1;
    const [activityData, setActivityData] = useState<ActivityData>({});

    const toggleActivity = (date: string) => {
        setActivityData(prevActivityData => {
            return {
                ...prevActivityData,
                [date]: !prevActivityData[date]
            };
        });
        console.log(date);
    };

    const getCellColor = (isActivityDone: boolean): string => {
        return isActivityDone ? '#8b77df' : '#ebedf0';
    };

    const generateCalendar = () => {
        const startDate = new Date(previousYear, 0, 1);
        const endDate = new Date(currentYear, 11, 31);
        const yearStart = new Date(currentYear, 0, 1);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const daysArray = [];

        for (let day = new Date(startDate); day <= endDate; day.setDate(day.getDate() + 1)) {
            /** Up to and including today's date */
            if (day > today) {
                break;
            }
            const formattedDate = day.toISOString().split('T')[0];
            daysArray.push({
                date: formattedDate,
                isToday: day.getTime() === today.getTime(),
                isLastYear: day < yearStart,
                isActivityDone: !!activityData[formattedDate],
            });
        }

        return daysArray;
    };

    return (
        <div className="heatmap">
            <div className="heatmap-head">
                <h2 className="heatmap-title">Drawing</h2>
                <button>+</button>
            </div>
            <div className="heatmap-calendar">
                {generateCalendar().map((day, i) => (
                    <div
                        key={i}
                        className={`day ${day.isToday ? 'today' : ''} ${day.isLastYear ? 'lastYear' : ''}`}
                        style={{ backgroundColor: getCellColor(day.isActivityDone) }}
                        onClick={() => toggleActivity(day.date)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeatMapCalendar;