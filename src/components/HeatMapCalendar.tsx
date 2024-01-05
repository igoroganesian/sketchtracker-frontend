import { useState } from 'react';
import "./HeatMapCalendar.css";

type ActivityData = {
    [date: string]: boolean;
};

interface HeatMapCalendarProps {
    activityData: ActivityData;
}

const HeatMapCalendar = ({ activityData }: HeatMapCalendarProps) => {
    const [currentYear] = useState(new Date().getFullYear());

    const getCellColor = (isActivityDone: boolean): string => {
        return isActivityDone ? '#40c463' : '#ebedf0';
    };

    const generateCalendar = () => {
        const startDate = new Date(currentYear, 0, 1);
        const endDate = new Date(currentYear, 11, 31);

        const daysArray = [];

        for (let day = new Date(startDate); day <= endDate; day.setDate(day.getDate() + 1)) {
            const formattedDate = day.toISOString().split('T')[0];
            daysArray.push({
                date: formattedDate,
                isActivityDone: !!activityData[formattedDate],
            });
        }

        return daysArray;
    };

    return (
        <div className="heat-map-calendar">
            {generateCalendar().map((day, i) => (
                <div
                    key={i}
                    className="day"
                    style={{ backgroundColor: getCellColor(day.isActivityDone) }}
                />
            ))}
        </div>
    );
};

export default HeatMapCalendar;