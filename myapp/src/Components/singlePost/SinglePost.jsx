import "./singlePost.css"

function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Yazar: <b>Emre</b>
                </span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati vitae cumque in sint consectetur nihil autem error, modi vero nemo a expedita aliquam enim nulla voluptate! Omnis odio dignissimos culpa consequatur inventore sequi aliquam animi sapiente ea sed quo placeat, voluptatum nisi corrupti esse commodi. Repellat recusandae placeat distinctio quod natus perferendis omnis eligendi. Doloremque totam magni recusandae omnis eius ipsam saepe ducimus molestiae sint. Iure molestiae commodi accusantium architecto, incidunt officiis nesciunt provident ad temporibus rerum! Minus enim voluptas tempora culpa maxime. Rem ut excepturi voluptatem soluta sapiente at ipsam quae repellendus in. Voluptatum sapiente praesentium laudantium voluptates sint et minus maxime amet laboriosam optio, placeat architecto iure ipsum explicabo quis, totam velit alias consequatur. Repellat nulla fugit cum ex, deleniti, necessitatibus aliquid reiciendis commodi voluptatum quod id iure illum velit tenetur eum! Ab non at ut voluptatibus odit quia id facere quo minus eos necessitatibus reprehenderit vel voluptatem quae, sunt explicabo quis sint officiis impedit quasi dolore labore! Dolorem voluptas placeat minima, molestiae, aperiam earum fuga qui consequuntur sapiente rem officiis eveniet iure similique asperiores tempore a libero. Ad in labore eligendi incidunt delectus, voluptatem sunt porro vero tempore at similique perspiciatis officiis, sed quos. Sapiente, est?
            </p>
        </div>
    </div>
  )
}

export default SinglePost