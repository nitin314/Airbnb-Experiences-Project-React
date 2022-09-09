import './MainSection.css';
export default function MainSection(props){
    return (
        <div className="Main-Section-container">{props.children}</div>
    );
}