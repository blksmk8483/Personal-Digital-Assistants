function ProfileCard({ title, handle, image, description }) {
    // ------ I could write this either way, this just get the code lines down by a few more bits... ------
    // OPTION 1 - how I could write this
    // const title = props.title;
    // const handle = props.handle;

    // OPTION 2 - how I could write this
    // const { title, handle } = props;

    // OPTION 3 - I could list the variables I want inside the argument list on line 1

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="profile card" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">{description}</div>
            </div>
        </div>
    );
}

export default ProfileCard;