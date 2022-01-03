import './styles.css';

const Form = () => {
  return (
    <div className="product-crud-container">
      <div className=" base-card product-crud-form-card">
        <h1 className="product-crud-form-title">Dados do produto</h1>
        <form action="">
          <div className="row product-crud-inputs-container">
            <div className="col-lg-6 product-crud-inputs-left-container">
              <div className="margin-bottom-30">
                <input type="text" className="form-control base-input" />
              </div>
              <div className="margin-bottom-30">
                <input type="text" className="form-control base-input" />
              </div>
              <div className="product-crud-input">
                <input type="text" className="form-control base-input" />
              </div>
            </div>
            <div className="col-lg-6">
              <div>
              <textarea
                name=""
                rows={8}
                className="form-control base-input h-auto"
              />
              </div>              
            </div>
          </div>
          <div className="product-crud-buttons-container">
            <button className="btn btn-outline-danger product-crud-button">cancelar</button>
            <button className="btn btn-primary product-crud-button">salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
