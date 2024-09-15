import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextDecoder,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SvgUri } from "react-native-svg";

export default function App() {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(141800);
  const [order, setOrder] = useState("");

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setPrice(price + 141800);
  };
  const decreateQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice(price - 141800);
    }
  };

  const ordered = () => {
    setOrder("Đã đặt hàng");
    Alert.alert(order);
  };

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <View
          style={{
            padding: 20,
            flexDirection: "row",
            gap: 20,
            backgroundColor: "white",
          }}
        >
          <Image source={require("./assets/book.png")} />
          <View style={{ gap: 10 }}>
            <Text>Nguyên hàm tích phân và ứng dụng </Text>
            <Text>Cung cấp bởi Tiki Trading</Text>
            <Text style={{ color: "red", fontSize: 20, fontWeight: 600 }}>
              141.800 đ
            </Text>
            <Text style={{ textDecorationLine: "line-through", color: "gray" }}>
              141.800 đ
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", gap: 15 }}>
                <TouchableOpacity onPress={decreateQuantity}>
                  <Image source={require("./assets/btnminus.png")} />
                </TouchableOpacity>
                <Text>{quantity}</Text>
                <TouchableOpacity onPress={increaseQuantity}>
                  <Image source={require("./assets/btnadd.png")} />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{ color: "blue" }}>Mua sau</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            gap: 20,
            padding: 20,
            flexDirection: "row",
            backgroundColor: "white",
          }}
        >
          <Text>Mã giảm giá đã lưu</Text>
          <TouchableOpacity>
            <Text style={{ color: "blue" }}>Xem tại đây?</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 20,
            flexDirection: "row",
            backgroundColor: "white",
            gap: 30,
          }}
        >
          <View style={styles.discount}>
            <Text>Mã giảm giá</Text>
          </View>
          <TouchableOpacity style={styles.apDung}>
            <Text style={{ color: "white" }}>ÁP DỤNG</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          gap: 10,
          padding: 30,
          flexDirection: "row",
          backgroundColor: "white",
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 12 }}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "blue", fontSize: 12 }}>Nhập tại đây?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tamTinh}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>Tạm tính</Text>
        <Text style={styles.priceColor}>
          {" "}
          {price.toLocaleString("vn", "VN")} đ
        </Text>
      </View>
      <View style={{ backgroundColor: "white" }}>
        <View style={styles.thanhTien}>
          <Text style={{ color: "gray", fontSize: 18, fontWeight: "700" }}>
            Thành tiền
          </Text>
          <Text style={styles.priceColor}>
            {price.toLocaleString("vn", "VN")} đ
          </Text>
        </View>
        <TouchableOpacity style={styles.successOrder} onPress={ordered}>
          <Text style={{ color: "white", fontWeight: "700", fontSize: 16 }}>
            TIẾN HÀNH ĐẠT HÀNG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    paddingTop: 30,
  },
  thanhTien: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 20,
  },
  tamTinh: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 20,
    marginBottom: 190,
  },
  priceColor: {
    color: "red",
    fontSize: 18,
    fontWeight: "700",
  },
  successOrder: {
    backgroundColor: "red",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  discount: {
    flexDirection: "row",
    gap: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "gray",
    width: "50%",
    justifyContent: "center",
  },
  apDung: {
    padding: 10,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
  },
});
