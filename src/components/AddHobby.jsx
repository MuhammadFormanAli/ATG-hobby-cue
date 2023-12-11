import { Link } from "react-router-dom";


const AddHobby = () => {
    return (
        <div className="m-1 p-1 p-md-3 m-md-3 m-lg-5 p-lg-5">
            <div className="border p-4 rounded ">
            <div className="d-flex align-items-center py-4">
              <img src="/public/Add.png" alt="" />
              <p className="m-0 ps-2 fw-semibold">Add your own</p>
            </div>
            <p>
            Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page
            </p>
            <Link to='add-listing' className="btn fw-medium btn-outline-info my-3">Add New</Link>
          </div>
        </div>
    );
};

export default AddHobby;