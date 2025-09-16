package com.nativelogger

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.nativelogger.NativeLoggerSpec

class NativeLoggerModule(reactContext: ReactApplicationContext) : NativeLoggerSpec(reactContext) {
    override fun getName() = NAME

    override fun log(message: String) {
        Log.d("NativeLogger", message)
    }

    companion object {
        const val NAME = "NativeLogger"
    }
}