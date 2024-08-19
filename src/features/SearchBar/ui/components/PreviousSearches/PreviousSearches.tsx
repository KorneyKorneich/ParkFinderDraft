import { View, FlatList, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { CustomButton } from "@shared/ui";
import { getData } from "../../../lib/asyncStorageFuncs";
import { styles } from "./PreviousSearches.styles";

interface IPreviousSearches {
    triger: boolean;
    setValue: (value: string) => void;
    handleSearch: (value: string) => void;
    isResult: boolean;
}

export const PreviousSearches: React.FC<IPreviousSearches> = ({ triger, setValue, handleSearch, isResult }) => {
    const [hints, setHints] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setHints(data);
        };

        fetchData();
    }, [triger]);

    const handleChooseHint = (value: string) => {
        setValue(value);
        handleSearch(value);
    };

    return (
        <View style={styles.hintsArea}>
            {isResult ? (
                <FlatList
                    data={hints}
                    keyExtractor={(index) => index.toString()}
                    renderItem={({ item }) => (
                        <CustomButton
                            onPress={() => handleChooseHint(item)}
                            textStyle={styles.textStyle}
                            style={styles.btnStyle}
                            title={item}
                        />
                    )}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    keyboardShouldPersistTaps="always"
                />
            ) : (
                <Text style={styles.noResult}>No results...</Text>
            )}
        </View>
    );
};
