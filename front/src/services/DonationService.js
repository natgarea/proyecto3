import axios from "axios";

export default class DonationService {
  constructor() {
    this.URL = process.env.REACT_APP_API_URL + "/api/donation";
    this.service = axios.create({
      baseURL: this.URL,
      withCredentials: true
    });
  }

  addOrgDonation(donation) {
    let donorId = donation.user;
    let orgId = donation.org;
    return this.service
      .post(`/o/${donorId}/${orgId}`, donation)
      .then(res => res.data);
  }

  addComment(donationId, comment) {
    return this.service.put(`/comment/${donationId}`, { comment: comment }).then(res => res.data);
  }
}