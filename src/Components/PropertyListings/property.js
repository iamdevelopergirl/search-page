import './property.css';

const getFontSize = (title) => {
    let maxw = 370, maxh = 30, maxsize = 18, style = {};
    let d = document.createElement("span");
    d.style.fontSize = maxsize + "px";
    d.innerText = title;
    document.body.appendChild(d);
    let w = d.offsetWidth;
    let h = d.offsetHeight;
    document.body.removeChild(d);
    let x = w > maxw ? maxw / w : 1;
    let y = h > maxh ? maxh / h : 1;
    let r = Math.min(x, y) * maxsize;
    let fsize = Math.round(r) + "px";
    style.fontSize = fsize;
    return style;
}

const Property = ({title, image, price}) => (
    <article className="property-article">
        <img src={image} alt={title} className="property-image">
        </img>
        <div className="property-name" style={getFontSize(title)}>
            <p>
                {title}
            </p>
        </div>
        <div className="property-price">
            <p>
                {price}
                <span> {` per month`}</span>
            </p>
        </div>
    </article>
)

export default Property;