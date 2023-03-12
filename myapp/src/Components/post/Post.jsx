import "./post.css"

function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Müzik</span>
                    <span className="postCat">Hayat</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet.
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet vero voluptates magni quos. Quis dignissimos recusandae facere omnis delectus, aliquid pariatur quibusdam nisi totam quo labore velit placeat illum est.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet vero voluptates magni quos. Quis dignissimos recusandae facere omnis delectus, aliquid pariatur quibusdam nisi totam quo labore velit placeat illum est.
            </p>



        </div>
    )
}

export default Post