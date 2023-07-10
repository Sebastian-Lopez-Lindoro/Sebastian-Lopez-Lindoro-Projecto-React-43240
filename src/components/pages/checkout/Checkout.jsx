import "./Checkout.css"
import { TextField } from "@mui/material"

const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div className="div_form_container">
      <h1 className="form_title">Please fill out the form</h1>
      <div className="div_form">
        <form className="div_form_inside" onSubmit={handleSubmit}>
          <TextField className="form_text" label="Name" variant="outlined" name="name" onChange={handleChange} helperText={errors.name} error={errors.name ? true : false} />
          <TextField className="form_text" label="Email" variant="outlined" name="email" onChange={handleChange} helperText={errors.email} error={errors.email ? true : false} />
          <TextField className="form_text" label="Phone" variant="outlined" name="phone" onChange={handleChange} helperText={errors.phone} error={errors.phone ? true : false} />
          <button className="place_order_button" type="submit">
            Place your order
          </button>
        </form>
      </div>
    </div>
  )
}

export default Checkout
