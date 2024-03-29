import { MdDeleteForever} from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
    return (
      <div className="note" key={id}>
        <span>{text}</span>
        <div className="note-footer">
          <p>{date}</p>
            <MdDeleteForever
                className="delete-icon"
                size="1.3em"
                onClick={() => handleDeleteNote(id)}
            />
        </div>
      </div>
    );
}

export default Note;