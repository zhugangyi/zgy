<template>
  <div>
    <baidu-map class="bm-view" center="宁海" style="width: 100%" scroll-wheel-zoom="true">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_LEFT"
      ></bm-map-type>
      <bm-marker
        :position="{ lng: 121.43072, lat: 29.2889 }"
        :dragging="false"
        title="气象北路3号"
      >
      <bm-label content="气象北路3号" :labelStyle="{color: 'red', fontSize : '12px'}" :offset="{width: -35, height: 30}"/>
      </bm-marker>
      
      <bm-marker
        :position="{ lng: 121.43072, lat: 29.3189 }"
        :dragging="false"
        title="北斗北路3号"
      >
      <bm-label content="北斗北路3号" :labelStyle="{color: 'red', fontSize : '12px'}" :offset="{width: -35, height: 30}"/>
      </bm-marker>
      <bm-marker
        :position="{ lng: 121.52072, lat: 29.2589 }"
        :dragging="false"
        title="时代大道8号"
      >
      <bm-label content="时代大道8号" :labelStyle="{color: 'red', fontSize : '12px'}" :offset="{width: -35, height: 30}"/>
      </bm-marker>
      <bm-marker
        :position="{ lng: 121.46072, lat: 29.3489 }"
        :dragging="false"
        title="宁波银行大厦"
      >
      <bm-label content="宁波银行大厦" :labelStyle="{color: 'red', fontSize : '12px'}" :offset="{width: -35, height: 30}"/>
      </bm-marker>
      <bm-marker
        :position="{ lng: 121.48072, lat: 29.3789 }"
        :dragging="false"
        title="环球中心3号"
      >
      <bm-label content="环球中心3号" :labelStyle="{color: 'red', fontSize : '12px'}" :offset="{width: -35, height: 30}"/>
      </bm-marker>
      <bm-boundary
        name="宁波市宁海县"
        :strokeWeight="2"
        strokeColor="blue"
      ></bm-boundary>
    </baidu-map>
  </div>
</template>


<script>
/* eslint-disable */
//百度地图

export default {};
</script>

<style>
.bm-view {
  width: 500px;
  height: 450px;
}
</style>