import axios from "axios";

export default axios.create({
	baseURL:'https://api.unsplash.com/',
	headers: {
		Authorization: "Client-ID i7Cl-0uJAn7ftD3i0d4mHRuD4yDPqMPZSZs5_dY0shQ",
	},
})
