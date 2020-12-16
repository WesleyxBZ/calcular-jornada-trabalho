import React, {FC, useEffect, useState} from 'react';
import './styles.css';
import {Period} from '../../core/Period';

interface PeriodsViewProps {
    newPeriod: Period;
}

const PeriodView: FC<PeriodsViewProps> = (props: PeriodsViewProps) => {

    const [periods, setPeriods] = useState<Period[]>([]);

    useEffect(() => {
        const {start, end} = props.newPeriod;
        if (!start && !end) return;
        const time = handleCalculateTime(end, start);
        const result = new Date(0, 0, 0, time.getHours(), time.getMinutes(), 0);
        const period: Period = {start, end, result};
        setPeriods(oldPeriods => [...oldPeriods, period]);
    }, [props.newPeriod]);

    function toTimeString(date: Date): string {
        return (date.getHours() > 9 ? date.getHours() : '0' + date.getHours())
            + ':'
            + (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes())
    }

    function handleCalculateTime(endDate: Date, startDate: Date): Date {
        let diff = endDate.getTime() - startDate.getTime();
        const hours = Math.floor(diff / 1000 / 60 / 60);
        diff -= hours * 1000 * 60 * 60;
        const minutes = Math.floor(diff / 1000 / 60);
        return new Date(0, 0, 0, hours, minutes, 0);
    }

    function getTotalHours(): Date {
        let horas = 0;
        let minutos = 0;

        periods.forEach(p => {
            const time = handleCalculateTime(p.end, p.start);
            horas += time.getHours();
            minutos += time.getMinutes();
        });

        return new Date(0, 0, 0, horas, minutos, 0);
    }

    function clearPeriodsArray(): void {
        setPeriods([]);
    }

    return (
        <div className="times">

            {
                periods.length > 0
                    ? periods.map((period: Period, index: number) => {
                        return (
                            <p key={index} className="times__text">
                                {toTimeString(period.start)} às {toTimeString(period.end)} = {toTimeString(period.result)}
                            </p>
                        )
                    })
                    : (
                        <div>
                            <p className="times__text">00:00 às 00:00 = 00:00</p>
                            <p className="times__text">00:00 às 00:00 = 00:00</p>
                        </div>
                    )
            }

            <hr className="times__separator"/>

            <p className="times__text-total">
                Total: &nbsp;
                {
                    periods.length > 0
                        ? '' + toTimeString(getTotalHours())
                        : ' 00:00'
                }
                <button className="times__button" onClick={clearPeriodsArray}>Limpar</button>
            </p>

        </div>
    );

}

export default PeriodView;
