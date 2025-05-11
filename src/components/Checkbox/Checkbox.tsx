import './Checkbox.css';

export default function Checkbox ({label, checked, onChange, disabled = false, labelColor = 'white'}: {
    label: string;
    checked: boolean;
    onChange: (event: boolean) => void;
    disabled?: boolean;
    labelColor?: string;
}) {
    return (
        <label className="custom-checkbox">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                disabled={disabled}
                className="custom-checkbox__input"
            />
            <div className="custom-checkbox__box">
                {checked && (
                    <svg
                        className="custom-checkbox__checkmark"
                        viewBox="0 0 16 12"
                        fill="none"
                    >
                        <path d="M1 6L5 10L15 1"/>
                    </svg>
                )}
            </div>
            <span className="custom-checkbox__label" style={{
                color: labelColor
            }
            }>{label}</span>
        </label>
    );
}