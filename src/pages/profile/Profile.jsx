import "./profile.css";

import Feed  from "../../components/feed/Feed";
import Rightbar  from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";


export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
    <Sidebar/>
    <div className="profileRight">
      <div className="profileRightTop">
        <div className="profileCover">
        <img src="assets/post/3.jpeg" className="profileCoverImg" alt="" />
        <img src="assets/person/7.jpeg" className="profileUserImg" alt="" />
        </div>
        <div className="profileInfo">
          <h4 className="profileInfoName">Jubileu Mascarado</h4>
          <span className="profileInfoDesc">Hello humble sir from russia</span>
        </div>
      </div>
      <div className="profileRightBottom">
    <Feed/>
    <Rightbar profile/>
    </div>
    </div>
    </div>
    </>
  )
}
