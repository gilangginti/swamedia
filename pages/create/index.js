import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { postRequest } from "../../utils/Network";
export default function Index() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter()
  const onSubmit = async (data) => {
    await postRequest('public/v2/users', data).then(()=>{
      toast.success('Berhasil membuat users', {theme: 'colored'})
      router.push('/list')
    })
  };

  return (
    <Fragment>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Nama
                <span className="text-danger"> *</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.name && "is-invalid"}`}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                {...register("name", {
                  required: { value: true, message: "Mohon isi nama" },
                })}
              />
              {errors.name && (
                <div
                  id="validationServer03Feedback"
                  className="invalid-feedback"
                >
                  {errors.name.message}
                </div>
              )}
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Email
                <span className="text-danger"> *</span>
              </label>
              <input
                type="email"
                className={`form-control ${errors.email && "is-invalid"}`}
                id="exampleInputPassword1"
                {...register("email", {
                  required: { value: true, message: "Mohon masukan email" },
                })}
              />
              {errors.email && (
                <div
                  id="validationServer03Feedback"
                  className="invalid-feedback"
                >
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Jenis Kelamin
              </label>
              <select className="form-control" {...register("gender")}>
                <option value={"male"} selected>Laki Laki</option>
                <option value={"female"}>Perempuan</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Status
              </label>
              <select className="form-control" {...register("status")}>
                <option value={"active"} selected>Aktif</option>
                <option value={"inactive"}>Tidak Aktif</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
