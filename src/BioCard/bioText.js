var dob = new Date("06/06/1998");
var ageDT = new Date(Date.now() - dob.getTime());
var age = Math.abs(ageDT.getUTCFullYear() - 1970);
module.exports = {
  bioText: `Hey there, I am Cade Gray.  I am a ${age} year old from East Tennessee that has experience in multiple facets of the I.T field.  I attended Radford University where I obtained a Bachelor of Science in Information Science and Systems with a concentration in Web Development. My skills include but are not limited to: Full Stack JavaScript development, Windows 10 administration and troubleshooting, and knowledge of both computer science principals and application of information technology in a financial industry context.`,
};
