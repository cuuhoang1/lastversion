import React, { useEffect, useState } from "react";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { useFormik } from "formik";
import { profileSchema } from "../../schema/profile";
import axios from "axios";
import { toast } from "react-toastify";

const Account = ({ user }) => {
  const [userCoupons, setUserCoupons] = useState([]);

  useEffect(() => {
    const fetchUserCoupons = async () => {
      try {
        const res = await axios.get(`/api/users/${user._id}/coupons`);
        setUserCoupons(res.data);
      } catch (error) {
        console.error("Lỗi nhập mã giảm giá:", error);
      }
    };

    if (user) {
      fetchUserCoupons();
    }
  }, [user]);

  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
        values
      );
      if (res.status === 200) {
        toast.success("Cập nhật thành công");
      }
    } catch (err) {
      console.log(err);
    }
  };

 
  

  return (
    <div>
      <form className="lg:p-8 flex-1 lg:mt-0 mt-5" onSubmit={handleSubmit}>
        <Title addClass="text-[40px]">Account Settings</Title>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          ))}
        </div>
        <button className="btn-primary mt-4" type="submit">
          Update
        </button>
      </form>
      <div className="mt-8">
        <Title addClass="text-[24px]">Mã giảm giá đã sử dụng</Title>
        <ul>
          {userCoupons.length > 0 ? (
            userCoupons.map((coupon) => (
              <li key={coupon._id} className="mt-2">
                <b>{coupon.code}</b>: Đã giảm {coupon.percentageValue}% (tối đa {coupon.maxDiscountValue} VNĐ)
              </li>
            ))
          ) : (
            <li>Không có mã giảm giá nào được sử dụng.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Account;
