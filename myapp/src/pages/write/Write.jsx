import "./write.css"

function Write() {
  return (
    <div className="write">
        <img className="writeImage" src="https://images.pexels.com/photos/8264573/pexels-photo-8264573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Başlık" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea 
                placeholder="Metin giriniz..." 
                type="text" 
                className="writeInput writeText"
                ></textarea>
            </div>
            <button className="writeSubmit">
                Yayınla
            </button>
        </form>
    </div>
  )
}

export default Write