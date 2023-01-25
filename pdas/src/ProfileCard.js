function ProfileCard({title, handle }) {
    // ------ I could write this either way, this just get the code lines down by a few more bits... ------
    // OPTION 1 - how I could write this
    // const title = props.title;
    // const handle = props.handle;

     // OPTION 2 - how I could write this
    // const { title, handle } = props;

    // OPTION 3 - I could list the variables I want inside the argument list on line 1

    return (
        <div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    );
}

export default ProfileCard;