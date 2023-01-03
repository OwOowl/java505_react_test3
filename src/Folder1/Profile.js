import React from "react";

function Profile(props) {
    let data = props;
    let userTel = props.userTel;

    return(
        <div className={"border rounded-2 px-3 m-4"}>
            <div className={"my-3"}>
                <label for={"user-id"} className={"form-label"}>아이디 : </label>
                <input type={"text"} id={"user-id"} className={"form-control"} value={props.userId} />
            </div>
            <div className={"my-3"}>
                <label for={"user-name"} className={"form-label"}>이름 : </label>
                <input type={"text"} id={"user-name"} className={"form-control"} value={data.userName} />
            </div>
            <div className={"my-3"}>
                <label for={"user-tel"} className={"form-label"}>전화번호 : </label>
                <input type={"tel"} id={"user-tel"} className={"form-control"} value={userTel} />
            </div>
            <div className={"my-3"}>
                <label for={"uer-email"} className={"form-label"}>이메일 : </label>
                <input type={"email"} id={"user-email"} className={"form-control"} value={props.userEmail} />
            </div>
        </div>
    );
}

export default Profile;