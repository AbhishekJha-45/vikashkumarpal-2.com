function createMarkup(content) {
    return {__html: content};
}

export default function SetInnerHtml({postData}) {
    return (
       <div>
           <p dangerouslySetInnerHTML={createMarkup(postData)}></p>
       </div>
    );
}
