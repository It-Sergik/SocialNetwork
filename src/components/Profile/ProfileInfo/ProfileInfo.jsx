import styleProfInfo from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <img
                src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"}/>
            <div className={styleProfInfo.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                avatar + description
            </div>
            <div>{props.profile.contacts.facebook}</div>
        </div>
    )
}

export default ProfileInfo;