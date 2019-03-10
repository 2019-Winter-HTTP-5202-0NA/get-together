$(document).ready(function () {
    $(".sortable").sortable();

    $('.playlist__info').click(function () {
        if ($('#songs').css('visibility') == 'hidden')
            $('#songs').css('visibility', 'visible');
        else
            $('#songs').css('visibility', 'hidden');
    });

    $(".playlist-page__create").click(function () {
        $("#createPlaylist").toggle();
    });

    $(".close").click(function () {
        $("#createPlaylist").hide();
    });

    //Search Bar
    $(".searchbar__input").on("keyup", function () {
        var playlist = $(this).val().toLowerCase();
        $("#playlists").filter(function () {
            $(this).toggle($(this), text().toLowerCase().indexOf(playlist) > -1)
        });
    });

    //Playlist create
    $('#createplaylist').submit(function (event) {
        event.preventDefault();
        var title = $("#playlist__name").val();
        var playlist = "";
        playlist = `<div class="playlist">
        <div class="playlist_item playlist__image">
            <i class="fas fa-headphones-alt playlist-icon"></i>
        </div>
        <a href="#" class="playlist_item playlist__info">
            <div>
                <p class="playlist__title">${title}</p>
                <p class="playlist__song-count">Number of Songs</p>
            </div>
        </a>
        <div class="playlist_item playlist__options"> <a href="#"><i class="fas fa-ellipsis-v"></i></a></div>
    </div>`;
        $("#playlists").append(playlist);
    });
});