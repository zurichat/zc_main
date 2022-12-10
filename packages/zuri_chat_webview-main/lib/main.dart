import 'dart:io';
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Zuri-Chat',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const WebViewHomPage(),
    );
  }
}

class WebViewHomPage extends StatefulWidget {
  const WebViewHomPage({super.key});

  @override
  State<WebViewHomPage> createState() => _WebViewHomPageState();
}

class _WebViewHomPageState extends State<WebViewHomPage> {
  @override
  void initState() {
    if (Platform.isAndroid) WebView.platform = AndroidWebView();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: SafeArea(
        child: WebView(
          initialUrl: 'https://www.zuri.chat/',
          javascriptMode: JavascriptMode.unrestricted,
        ),
      ),
    );
  }
}
