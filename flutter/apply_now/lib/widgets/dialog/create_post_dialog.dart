import 'package:flutter/material.dart';

class CreatePostDialog extends StatefulWidget {
  CreatePostDialog({Key key}) : super(key: key);

  @override
  State<StatefulWidget> createState() => _StateCreatePostDialog();
}

class _StateCreatePostDialog extends State<CreatePostDialog> {
  @override
  Widget build(BuildContext context) {
    return Dialog(
      child: Container(
        color: Colors.white,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Text("CREATE POST"),
            TextField(),
            Row(children: <Widget>[
              FlatButton(onPressed: () {}, child: Text("Cancel")),
              FlatButton(onPressed: () {}, child: Text("Yes")),
            ],)
          ],
        ),
      ),
    );
  }
}
