juke.config(function($stateProvider) {
	$stateProvider.state('albumList', {
		url: '/albums',
		templateUrl: '../../html/albums.template.html',
		controller: 'AlbumsCtrl'
	});
})
.config(function($stateProvider) {
	$stateProvider.state('artistList', {
		url: '/artists',
		templateUrl: '../../html/artists.template.html',
		controller: 'ArtistsCtrl'
	});
})
// .config(function($stateProvider) {
// 	$stateProvider.state('album', {
// 		url: '/album/1',
// 		templateUrl: '../../html/album.template.html',
// 		controller: 'AlbumCtrl(1)'
// 	});	
// })

