
export default function Movie(props) {
    const {Title, Year, imdbID, Type, Poster} = props;
    return(
        <div key={imdbID} classname="card movie">
            <div classname="card-image waves-effect waves-block waves-light">
                <img classname="activator" src={Poster} />
            </div>
            <div classname="card-content ">
                <span classname="card-title activator text-darken-4">{Title}</span>
                <p>{Year}  {Type}</p>
            </div>
            
      </div>
    )
}