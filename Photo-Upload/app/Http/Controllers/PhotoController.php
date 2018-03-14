<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Response;
use Purifier;

use App\Photo;

class PhotoController extends Controller
{
    public function store(Request $request)
    {
      $rules = [
        'photo' => 'required'
      ];

      $validator = Validator::make(Purifier::clean($request->all()), $rules);

      if($validator->fails())
      {
        return Response::json(['error' => 'Please fill out all fields.']);
      }

      $photoInput = $request->file('photo');
      $photoName = $photoInput->getClientOriginalName();
      $photoInput->move("storage/", $photoName);

      $photo = new Photo;
      $photo->photoURL = $request->root(). "/storage/".$photoName;

      $success = $photo->save();
      if ($success) {
        return Response::json(['success' => 'Your photo was Uploaded.']);
      } else {
        return Response::json(['error' => 'Database errpr please try again.']);
      }

    }


}
