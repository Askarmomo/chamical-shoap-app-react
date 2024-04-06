import propTypes from "prop-types"

const FormInput = ({ register, type, placeholder, label, error }) => {
    return (
        <div>
            <label htmlFor="" className=" font-semibold">{label}</label>
            <div>
                <input {...register} required type={type} placeholder={placeholder} className="p-1 rounded text-black outline-none bg-zinc-200 w-full" />
                {error && <small className='text-red-500'>{error.message}</small>}
            </div>
        </div>
    );
}

export default FormInput;

FormInput.propTypes = {
    register: propTypes.object,
    type: propTypes.string,
    placeholder: propTypes.string,
    label: propTypes.string

}