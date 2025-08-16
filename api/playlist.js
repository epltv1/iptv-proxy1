module.exports = async (req, res) => {
  // Create a simple M3U8 playlist for the test .ts file
  const playlist = `
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:10
#EXT-X-MEDIA-SEQUENCE:0
#EXTINF:10.0,
/api/proxy?token=${encodeURIComponent('http://starshare.st:80/live/97536964/97526028/23334.ts')}
#EXT-X-ENDLIST
  `.trim();

  res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(playlist);
};
