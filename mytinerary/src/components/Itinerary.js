import "../styles/Itinerary.css";

import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Comments from "./Comments";
import Activities from "./Activities";
import { useState, useEffect } from "react";
import { useGetActivitiesQuery } from "../features/activitiesAPI";
import { useGetUsersQuery } from "../features/usersAPI";
import {
  useGetOneItineraryMutation,
  useGetlikeUserMutation,
} from "../features/itinerariesAPI";
import { useGetCommentsQuery } from "../features/commentsAPI";
import { useAuth } from "../hooks/useAuth";
import NewComment from "./NewComment";

export default function Itinerary({ itinerary }) {
  const { data: activities } = useGetActivitiesQuery(itinerary._id);
  const { data: users } = useGetUsersQuery(itinerary._id);
  const { data: comments } = useGetCommentsQuery(itinerary._id);
  const { user: currentUser } = useAuth();
  console.log(currentUser);
  //creado para likes
  const { id } = useParams();
  let [getOneItinerary] = useGetOneItineraryMutation();
  const [likeDislike] = useGetlikeUserMutation();
  // const [data, setData] = useState({})
  const [image, setImage] = useState("");
  const [reload, setReload] = useState(true);

  useEffect(() => {
    getItinerary();
  }, [reload]);

  async function getItinerary() {
    try {
      let res = await getOneItinerary(itinerary._id);
      console.log(itinerary._id);
      if (res.data?.success) {
        //  console.log(res.data.response.like.includes(currentUser.id));
        if (res.data.response.like.includes(currentUser.id)) {
          console.log("sin like");
          setImage("/like_hearts1.png");
        } else {
          //   console.log("agregar like");
          setImage("/like_hearts2.png");
        }
        // setData(res.data.response)
      } else {
        console.log(res.error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function like() {
    console.log("id ciudad", id, "id usuario", currentUser.id);
    if (localStorage.getItem("token")) {
      console.log(localStorage.getItem("token"));
      try {
        let res = await likeDislike(itinerary._id);
        console.log(res.data?.success);
        if (res.data?.success) {
          setReload(!reload);
        } else {
          console.log(res.error);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  const [open, setOpen] = useState(false);
  const openComments = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div className="container-padre-itinerary">
      <div className="data-card">
        <h2>{itinerary.name}</h2>
        <div className="data-p-d">
          <p>Price: ${itinerary.price}</p>
          <p>Duration:{itinerary.duration}</p>
        </div>
        <p>likes{itinerary.likes}</p>
        <p>tags{itinerary.tags}</p>
      </div>
      <div className="container-activities">
        {activities?.response.map((activity) => (
          <Activities activity={activity} key={activity._id} />
        ))}
      </div>

      <div className="container-comments">
        <h2>Comments</h2>
        <img
          className="icon-despleg"
          onClick={openComments}
          src="https://cdn-icons-png.flaticon.com/512/3519/3519316.png"
          alt=""
          width="25px"></img>
        <div className="container2-comments">
          {open ? (
            <div className="container3-comments">
              <NewComment id={itinerary._id} />

              {comments?.response.length === 0 ? (
                <div>No comments</div>
              ) : (
                comments?.response.map((comment) => (
                  <Comments
                    comment={comment}
                    itinerary={itinerary._id}
                    key={comment._id}
                  />
                ))
              )}
            </div>
          ) : null}
        </div>
      </div>
      <img src={image} onClick={like} className="Detail-button" alt="like" />
    </div>
  );
}
