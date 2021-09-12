import './app2.css'
import $ from 'jquery'
const $tabBar = $('#tabBar')
const $content = $('#content')
$tabBar.on('click','li',(e) => {
      const $li = $(e.target)
      const $index = $li.index()
      $content.children().eq($index).addClass('active').siblings().removeClass('active')
      $tabBar.children().eq($index).addClass('selected').siblings().removeClass('selected')
})