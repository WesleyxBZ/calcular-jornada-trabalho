import React, {ChangeEvent, FormEvent, useState} from 'react';
import './styles.css';
import {Period} from '../../core/Period';
import Alert from '../../shared/Alert';
import {useDispatch} from 'react-redux';
import {formTimeActions} from '../../store/ducks/formTime';

const PeriodForm = () => {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState<Period>({} as Period);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
        const {name, value} = event.target;
        const date = stringToDate(value);
        setFormData({...formData, [name]: date});
    }

    function handleSubmit(event: FormEvent): void {
        event.preventDefault();
        const {start, end} = formData;

        if (start && end) {
            const result = new Date(0, 0, 0, 0, 0, 0);
            const period: Period = {start, end, result};
            dispatch(formTimeActions(period));
            handleFormClear();
        }
    }

    function handleFormClear(): void {
        (document.getElementById('start') as HTMLInputElement).value = '';
        (document.getElementById('end') as HTMLInputElement).value = '';
        setFormData({} as Period);
    }

    function stringToDate(value: string): Date {
        const hours: number = Number(value.split(':')[0]);
        const minutes: number = Number(value.split(':')[1]);
        return new Date(0, 0, 0, hours, minutes, 0);
    }

    return (
        <div className="container">

            <Alert/>

            <form id="formData" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-group__label">Início</label>
                    <input className="form-group__input"
                           type="time"
                           name="start"
                           onChange={handleInputChange}
                           required
                           id="start"/>
                </div>
                <div className="form-group">
                    <label className="form-group__label">Fim</label>
                    <input className="form-group__input"
                           type="time"
                           name="end"
                           onChange={handleInputChange}
                           required
                           id="end"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="form-group__button">Adicionar</button>
                </div>
            </form>

        </div>
    );

}

export default PeriodForm;
