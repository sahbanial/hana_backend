
export default {
   isMyPost:(p,{},{user})=>p?.createdBy?.id ===user?.id
};

