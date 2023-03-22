$(document).ready(function(){
    $('.menu-icon').click(function(){
        $('nav').toggleClass('nav-expanded');
        return false;
    })
})


var client = contentful.createClient({
    space: '0dvxaww6ggfz',
    accessToken: 'r_ISKEY6iqBc3nczRo1Vd8FOFytRRqu2YUklKU5dWiU',
  });
console.log(client);

client.getEntries().then(function (entries) {
    console.log(entries);

    
    entries.items.forEach(function (entry) {
        
        var resource = document.createElement('div');
        document.getElementById('all-resources').append(resource);

        var title = document.createElement('h3')
        title.innerHTML = entry.fields.title;
        resource.append(title);
        
        var subheading = document.createElement('p');
        subheading.innerHTML = entry.fields.subheading;
        resource.append(subheading);

        var cover = document.createElement('img');
        cover.src = 'http:'+entry.fields.cover.fields.file.url;
        resource.append(cover);

        var text = document.createElement('h2');
        subheading.innerHTML = entry.fields.text;
        resource.append(text);

        console.log(entry.fields.cover.fields.file.url);

        cover.classList.add('my-class-name')

    });
  });