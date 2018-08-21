(function ($){
  $(document).ready(function(){
    // YouTube iframe API is already loaded (when required) thanks to the pi_video module
    if ($('#block-highlightvideo iframe').length > 0) {
      $('#block-highlightvideo').addClass('highlight-video-dynamic');
      $('#block-highlightvideo iframe').wrap('<div id="queenslaw-highlight-video"/>');
      var video_html_id = $('#queenslaw-highlight-video iframe').attr('id');
      var video_html_id_parts = video_html_id.split('-');
      var video_id = video_html_id_parts[video_html_id_parts.length - 1];
      $('#queenslaw-highlight-video iframe').remove();
      var player = new YT.Player('queenslaw-highlight-video', {
        videoId: video_id,
        width: 560,
        height: 316,
        playerVars: {
          playlist: video_id, // otherwise loop doesn't work
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          loop: 1,
          fs: 0,
          cc_load_policty: 0,
          iv_load_policy: 3,
          autohide: 0
        },
        events: {
          onReady: function(e) {
            e.target.mute();
          }
        }
      });
    }
  });
}(jQuery));
