console.log("Client side code runninng");

function post_tweet() {
    console.log("post tweet button is clicked");
    fetch('/post_tweet', {method: 'GET'})
    .then(function(res) {
        if (res.ok) {
        console.log('post tweet request sent succesfully');
        return;
    }
    throw new Error('post tweet request failed');
    })
    .catch(function(error) {
        console.log(error);
    });
};