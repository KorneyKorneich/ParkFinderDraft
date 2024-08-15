import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { ParkingInf } from "@shared/api";
import { CustomButton } from "../../CustomButton/ui/CustomButton";
import { styles } from "./ParkingInfModal.styles";
import { CustomImage } from "../../CustomImage/ui/CustomImage";

const handicapImg = require("../../../assets/images/handicap.png");
const flashImg = require("../../../assets/images/flash.png");
const moneyImg = require("../../../assets/images/money.png");
const freeImg = require("../../../assets/images/free.png");
const starImg = require("../../../assets/images/star.png");
const flagImg = require("../../../assets/images/flag.png");

interface ParkingInfModal {
    isModalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    parkingInf: ParkingInf;
}

export const ParkingInfModal: React.FC<ParkingInfModal> = ({ isModalVisible, setModalVisible, parkingInf }) => {
    const { parkingName, paid, handicap, charging, workingHours, rating, comment } = parkingInf;

    const handleClose = () => {
        setModalVisible(false);
    };

    return (
        <Modal isVisible={isModalVisible} animationIn="zoomIn" animationOut="zoomOut">
            <View style={styles.modalBox}>
                <Text style={styles.parkingName}>{parkingName}</Text>
                <View style={styles.notificImgBox}>
                    {handicap && <CustomImage path={handicapImg} />}
                    {charging && <CustomImage path={flashImg} />}
                    <CustomImage path={paid ? moneyImg : freeImg} />
                </View>
                <View style={styles.workTimeBox}>
                    <Text style={styles.workTimeText}>Working time:</Text>
                    <Text style={styles.workTimeText}>{workingHours ? workingHours : "24-hour"}</Text>
                </View>
                {comment && (
                    <View style={styles.commentBox}>
                        <Text style={styles.commentText}>{comment}</Text>
                    </View>
                )}
                <TouchableOpacity activeOpacity={0.8} style={styles.ratingBox}>
                    <CustomImage style={styles.starStyle} path={starImg} />
                    <Text style={styles.ratingText}>{rating}</Text>
                </TouchableOpacity>
                <CustomButton style={styles.reportBtn} imgPath={flagImg} />
                <CustomButton style={styles.closeBtn} title="close" onPress={handleClose} />
            </View>
        </Modal>
    );
};
