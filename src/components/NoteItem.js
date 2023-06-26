

const NoteItem = (props) => {
    const { note } = props;

    return (
        <div className="col-md-6">   
            <div class="card my-3">
                <div class="card-body">
                    <h5 class="card-title">{note.title}</h5>
                    {/* <h6 class="card-subtitle mb-2 text-muted">{note.tag}</h6> */}
                    <p class="card-text">{note.desc} Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium distinctio animi enim ab aliquam dolores ipsam. Saepe ut corporis aspernatur aperiam recusandae tenetur nisi quos veniam quaerat? Dicta, culpa error?</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
