      const settings = {
        url: "https://api.nashcash.net/info",
        method: "GET",
        timeout: 0,
      };
    
      $.ajax(settings).done(function (response) {
        console.log(response);
        const content = (response.hashrate / 1000000).toFixed(2);
         
        $("#hashrate").append(content);
      });

